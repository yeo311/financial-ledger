import Skeleton from 'react-loading-skeleton';

function InputRow() {
  return (
    <div className="flex justify-between py-4">
      <Skeleton width={50} height={25} />
      <Skeleton width={50} height={25} />
    </div>
  );
}

export default function Loading() {
  return (
    <div>
      <div className="flex justify-end mb-4">
        <Skeleton width={50} height={33} style={{}} />
      </div>
      <div className="flex flex-col divide-y">
        {Array.from({ length: 4 }).map((_, i) => (
          <InputRow key={i} />
        ))}
      </div>
    </div>
  );
}
