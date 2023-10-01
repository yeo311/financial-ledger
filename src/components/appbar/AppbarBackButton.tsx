'use client';

import { IoMdArrowBack } from 'react-icons/io';
import Button from '../atom/Button';

export default function AppbarBackButton() {
  const handleClick = () => {
    window.history.back();
  };
  return (
    <div className="flex justify-center items-center absolute left-0 ml-2">
      <Button onClick={handleClick}>
        <IoMdArrowBack className="text-2xl" />
      </Button>
    </div>
  );
}
