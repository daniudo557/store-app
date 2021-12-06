import { formatDistanceToNow } from "date-fns";

export const distanceSiceNow = (date: Date) =>
  formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
