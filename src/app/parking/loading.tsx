import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Loading() {
  return (
    <div className="h-1/2 p-4">
      <div className="h-10"></div>
      <div>
        <Skeleton width="100%" height="144px" borderRadius="5rem" />
      </div>
      <div className="flex flex-col mt-10 items-center">
        <Skeleton width="100px" />
        <div className="h-4" />
        <Skeleton count={4} width="120px" />
      </div>
    </div>
  );
}
