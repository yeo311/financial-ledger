'use client';

export default function CreateButton() {
  const handleClick = async () => {
    await fetch('/api/item/create', {
      method: 'POST',
    });
  };
  return (
    <button type="button" onClick={handleClick}>
      create
    </button>
  );
}
