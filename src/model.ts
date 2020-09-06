interface Item {
  date: Date;
}

export function stringifyItems(items: Item[]) {
  return JSON.stringify(items.map((t) => t.date.getTime()));
}

export function parseItems(json: string) {
  return (JSON.parse(json) as number[]).map((t) => ({
    date: new Date(t),
  }));
}
export default Item;
