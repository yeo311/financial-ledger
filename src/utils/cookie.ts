export function setCookie(key: string, value: string, expire: number) {
  const cookieDate = new Date();
  cookieDate.setDate(cookieDate.getDate() + expire);
  const host =
    process.env.NODE_ENV === 'production'
      ? 'financial-ledger.vercel.app'
      : 'dev.side.com';

  const cookieValue = `${key}=${encodeURIComponent(
    value,
  )}; expires=${cookieDate.toUTCString()}; path=/; domain=${host}`;

  document.cookie = cookieValue;
}
