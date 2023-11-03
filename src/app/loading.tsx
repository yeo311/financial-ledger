import { PropsWithChildren } from 'react';
import Skeleton from 'react-loading-skeleton';

function LoadingItemSection({ children }: PropsWithChildren) {
  return <div className="mt-2">{children}</div>;
}

function LoadingItemRow({ children }: PropsWithChildren) {
  return <div className="flex py-2">{children}</div>;
}

function LoadingItemList() {
  return (
    <LoadingItemSection>
      <Skeleton
        style={{
          padding: '0.25rem 0px',
        }}
      />
      {Array.from({ length: 4 }).map((_, i) => (
        <LoadingItemRow key={i}>
          <Skeleton
            circle
            containerClassName="w-10"
            style={{ height: '2.5rem' }}
          />
          <Skeleton
            count={2}
            containerClassName="flex-1"
            style={{ marginLeft: '0.375rem' }}
          />
        </LoadingItemRow>
      ))}
    </LoadingItemSection>
  );
}

export default function Loading() {
  return (
    <div>
      <Skeleton height={28} width={150} />
      <Skeleton height={28} width={150} />
      <LoadingItemList />
      <LoadingItemList />
    </div>
  );
}
