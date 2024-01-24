import client from '@/libs/axios/client';
import { AddParkingParams } from '@/libs/postgres/parkings';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const addParking = (params: AddParkingParams) =>
  client.post('/api/parking/create', params);

const useAddParkingMutation = (
  options?: UseMutationOptions<AxiosResponse, unknown, AddParkingParams>,
) => {
  return useMutation({
    mutationFn: addParking,
    onError: () => {
      window.alert('주차장소 추가에 실패했습니다.');
    },
    ...options,
  });
};

export default useAddParkingMutation;
