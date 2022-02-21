export default function FormatStringDate(value: string): string {
  const date = new Date(value);
  const dayOfMonth = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${dayOfMonth} ${month} ${year}`;
}