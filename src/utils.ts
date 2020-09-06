import Item from "./model";

export function removeThenNewSetArray(x: Item[], n: Item) {
  const arr = [...x];
  arr.splice(
    arr.findIndex((t) => t.date.getTime() === n.date.getTime()),
    1
  );
  return arr;
}

export function newSetArray(x: Item[], n: Item) {
  const set = new Set<number>();
  const arr = [n];
  set.add(n.date.getTime());
  x.forEach((t) => {
    const tt = t.date.getTime();
    if (!set.has(tt)) {
      set.add(tt);
      arr.push(t);
    }
  });
  return arr;
}
