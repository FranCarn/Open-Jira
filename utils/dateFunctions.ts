import { formatDistanceToNow } from "date-fns";

export const getFormatTimeToNow = (date: number) => {
  const fromNow = formatDistanceToNow(date);
  return `${fromNow} ago`;
};
