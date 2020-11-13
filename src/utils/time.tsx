export const getTimeDisplay = (dateString: string) => {
  const d = new Date(dateString.replace('T', ' ').replace('Z', ' '));
  return `${d.getHours().toString().padStart(2, '0')}:${d.getHours().toString().padStart(2, '0')}`;
};
