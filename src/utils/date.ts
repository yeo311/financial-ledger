export const addMonth = (date: Date, add: number) =>
  new Date(date.setMonth(date.getMonth() + add));

export const formatNumber = (num: number) =>
  num < 10 ? `0${num}` : num.toString();
