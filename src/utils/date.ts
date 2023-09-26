export const addMonth = (date: Date, add: number) =>
  new Date(date.setMonth(date.getMonth() + add));
