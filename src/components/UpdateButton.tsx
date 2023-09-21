'use client';

export default function UpdateButton() {
  const handleClick = async () => {
    await fetch('/api/item/9d7a7fe9-3b3d-4a30-b454-8a005670c68c', {
      method: 'PUT',
    });
  };
  return (
    <button type="button" onClick={handleClick}>
      update
    </button>
  );
}
