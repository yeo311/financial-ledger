import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const StatisticsTitle = ({ children }: Props) => {
  return (
    <div className="border-b w-full py-1 my-1">
      <h2 className="text-xl">{children}</h2>
    </div>
  );
};
export default StatisticsTitle;
