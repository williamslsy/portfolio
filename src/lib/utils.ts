export const formatNumber = (value: string) => {
  if (!value) return '0';
  return value?.length >= 9
    ? (parseInt(value) / 1000000000).toFixed(0) + 'B'
    : value?.length >= 6
    ? (parseInt(value) / 1000000).toFixed(0) + 'M'
    : value?.length >= 4
    ? (parseInt(value) / 1000).toFixed(0) + 'K'
    : value;
};

export function formatDate(timestamp: string | number | Date): string {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formatter = new Intl.DateTimeFormat('en-US', options);
  return formatter.format(date);
}
