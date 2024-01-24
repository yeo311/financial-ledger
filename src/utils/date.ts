export const addMonth = (date: Date, add: number) =>
  new Date(date.setMonth(date.getMonth() + add));

export const formatNumber = (num: number) =>
  num < 10 ? `0${num}` : num.toString();

export const formatISOStringToYearMonthDay = (date: string) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = formatNumber(d.getMonth() + 1);
  const day = formatNumber(d.getDate());
  return `${year}-${month}-${day}`;
};
