'use client';

import useGetParkingQuery from '@/queries/useGetParkingQuery';
import { formatISOStringToYearMonthDay } from '@/utils/date';

const ParkingList = () => {
  const { data } = useGetParkingQuery();

  if (!data || data.length === 0)
    return (
      <div className="flex justify-center h-1/2 items-center text-2xl">
        데이터가 없습니다.
      </div>
    );

  const [current, ...list] = data;

  return (
    <>
      <div className="flex flex-col p-4 h-1/2 items-stretch">
        <div className="bg-violet-200 rounded-full h-36 mt-10 flex flex-col justify-center items-center gap-2">
          <span className="text-4xl">{current.title}</span>
          <span className="text-md ml-2">
            {formatISOStringToYearMonthDay(current.day)}
          </span>
        </div>
        <div className="mt-10 flex justify-center items-stretch">
          <div className="flex flex-col justify-center items-center w-full">
            <h3 className="text-md font-bold mb-4">최근 주차 내역</h3>
            <ul className="flex flex-col w-full px-8 py-4 bg-gray-100 rounded-lg">
              {list &&
                list.map((item) => {
                  return (
                    <li key={item.id}>
                      <div className="flex justify-between ">
                        <span>{item.title}</span>
                        <span className="text-slate-400">
                          {formatISOStringToYearMonthDay(item.day)}
                        </span>
                      </div>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParkingList;
