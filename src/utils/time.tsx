export const getTimeDisplay = (dateVal: number): string => {
  const d = new Date(dateVal);
  return `${d.getHours().toString().padStart(2, '0')}:${d
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;
};
