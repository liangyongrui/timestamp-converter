import dayjs, { Dayjs } from "dayjs";

interface Item {
  date: Dayjs;
}

export function stringifyItems(items: Item[]) {
  return JSON.stringify(items.map((t) => t.date.valueOf()));
}

export function parseItems(json: string) {
  return (JSON.parse(json) as number[]).map((t) => ({
    date: dayjs(t),
  }));
}
export default Item;
