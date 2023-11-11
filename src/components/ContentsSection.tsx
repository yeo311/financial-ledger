'use client';

import { useAtomValue } from 'jotai';
import ItemList from './item-list';
import { menuIndexAtom } from '@/atoms/menuIndex';
import StatisticsList from './statistics/StatisticsList';
import { Suspense } from 'react';
import Spinner from './atom/Spinner';

type Props = {
  year: string;
  month: string;
};

const ContentsSection = ({ year, month }: Props) => {
  const menuIndex = useAtomValue(menuIndexAtom);
  return (
    <section className="flex justify-center">
      <Suspense fallback={<Spinner />}>
        {menuIndex === 1 ? (
          <ItemList year={year} month={month} />
        ) : (
          <StatisticsList year={year} month={month} />
        )}
      </Suspense>
    </section>
  );
};

export default ContentsSection;
