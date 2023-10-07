'use client';

import { Item } from '@/libs/postgres';
import Avatar from '../atom/Avatar';
import { TouchEvent, useRef, useState } from 'react';
import cn from 'classnames';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import client from '@/libs/axios/client';
import { useParams } from 'next/navigation';
import Link from 'next/link';

interface Props {
  item: Item;
}

export default function ItemRow({ item }: Props) {
  const touchClientPosition = useRef({ clientX: 0, clientY: 0 });
  const [isShowDeleteButton, setIsShowDeleteButton] = useState(false);
  const queryClient = useQueryClient();
  const { year, month } = useParams<{ year: string; month: string }>();

  const mutation = useMutation({
    mutationFn: async () => {
      return client.delete(`/api/item/${item.id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['items', year, month],
      });
      queryClient.invalidateQueries({
        queryKey: ['total', year, month],
      });
    },
  });

  const handleTouchStart = (e: TouchEvent<HTMLLIElement>) => {
    const { clientX, clientY } = e.changedTouches[0];
    touchClientPosition.current = { clientX, clientY };
  };

  const handleTouchEnd = (e: TouchEvent<HTMLLIElement>) => {
    const { clientX, clientY } = e.changedTouches[0];
    const gapX = touchClientPosition.current.clientX - clientX;
    const isGapYSafe =
      Math.abs(touchClientPosition.current.clientY - clientY) < 50;
    if (!isGapYSafe) return;
    if (gapX > 50) {
      setIsShowDeleteButton(true);
    } else if (gapX < -50) {
      setIsShowDeleteButton(false);
    }
  };

  const handleClick = () => {};

  const handleClickDeleteButton = () => {
    if (window.confirm('삭제 하시겠습니까?')) {
      mutation.mutate();
    }
  };

  return (
    <li
      className={cn(
        'py-2',
        'flex',
        'items-center',
        'gap-1.5',
        'transition-transform',
        {
          'translate-x-[-7.5rem]': isShowDeleteButton,
        },
      )}
      style={{ width: 'calc(100% + 7.5rem)' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
    >
      <Avatar bgColor=""></Avatar>
      <div className="flex flex-col">
        <h3>{item.title}</h3>
        <span className="text-xs text-gray-600">{item.category_name}</span>
      </div>
      <div className="flex-auto flex justify-end">
        <p>
          {!item.isincome && '-'}
          {item.amount.toLocaleString()}원
        </p>
      </div>
      <div className="self-stretch basis-12 ml-5">
        <Link
          href={`/update/${item.id}`}
          className="bg-blue-600 h-full w-full text-white flex justify-center items-center"
        >
          수정
        </Link>
      </div>
      <div className="self-stretch basis-12 ml-1">
        <button
          type="button"
          className="bg-red-600 h-full w-full text-white"
          onClick={handleClickDeleteButton}
        >
          삭제
        </button>
      </div>
    </li>
  );
}
