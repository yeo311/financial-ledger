import Spinner from '@/components/Spinner';

export default function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-[100vh] z-10">
      <Spinner />
      <div
        className={`fixed w-full h-full left-0 top-0 bg-black opacity-10 z-10`}
      />
    </div>
  );
}
