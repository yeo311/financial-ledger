'use client';

import useAddParkingMutation from '@/queries/useAddParkingMutation';
import { GET_PARKING_QUERY_KEY } from '@/queries/useGetParkingQuery';
import { useQueryClient } from '@tanstack/react-query';
import { useRef } from 'react';

const ParkingAddForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const mutation = useAddParkingMutation({
    onSuccess: () => {
      if (ref.current) {
        ref.current.value = '';
      }
      queryClient.invalidateQueries({ queryKey: [GET_PARKING_QUERY_KEY] });
    },
  });

  const handleAddParking = () => {
    if (!ref.current || !ref.current.value) {
      window.alert('주차한 장소를 입력해주세요');
      return;
    }
    mutation.mutate({
      title: ref.current.value,
      day: new Date().toISOString(),
    });
  };

  return (
    <div className="flex justify-center items-center p-10 gap-1 mt-10">
      <input
        type="text"
        ref={ref}
        className="border-2 border-gray-500 flex-auto h-10 outline-0 p-2"
      />
      <button
        onClick={handleAddParking}
        className="border-2 border-gray-500 flex-auto h-10 active:bg-gray-700 active:border-gray-700"
      >
        추가
      </button>
    </div>
  );
};

export default ParkingAddForm;
