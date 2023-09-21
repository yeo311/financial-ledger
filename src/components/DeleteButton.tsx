'use client';

export default function DeleteButton() {
  const handleClick = async () => {
    await fetch('/api/item/11f51db9-edac-438d-974f-d67f5749692e', {
      method: 'DELETE',
    });
  };
  return (
    <button type="button" onClick={handleClick}>
      delete
    </button>
  );
}
