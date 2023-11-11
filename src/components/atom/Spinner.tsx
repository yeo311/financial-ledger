import { ImSpinner } from 'react-icons/im';

export default function Spinner({ height = '200px' }: { height?: string }) {
  return (
    <div className="flex justify-center items-center" style={{ height }}>
      <ImSpinner className="animate-spin text-gray-600 text-2xl z-20" />
    </div>
  );
}
