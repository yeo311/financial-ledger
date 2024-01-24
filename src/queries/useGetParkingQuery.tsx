import client from '@/libs/axios/client';
import { Parking } from '@/libs/postgres/parkings';
import { useQuery } from '@tanstack/react-query';

export const GET_PARKING_QUERY_KEY = 'get-parking';

const getParking = () => client.get<{ data: Parking[] }>('/api/parking');

const useGetParkingQuery = () => {
  return useQuery({
    queryKey: [GET_PARKING_QUERY_KEY],
    queryFn: getParking,
    retry: 0,
    select: (res) => res.data.data,
  });
};

export default useGetParkingQuery;
