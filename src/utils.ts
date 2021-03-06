import Item from "./model";
import { notification } from "antd";

export function unique(xs: Item[]) {
  const arr: Item[] = [];
  const s = new Set();
  xs.forEach((x) => {
    if (!s.has(x.date.valueOf())) {
      arr.push(x);
      s.add(x.date.valueOf());
    }
  });
  return arr;
}

export function removeThenNewSetArray(x: Item[], n: Item) {
  const arr = [...x];
  arr.splice(
    arr.findIndex((t) => t.date.valueOf() === n.date.valueOf()),
    1
  );
  return arr;
}

export function newSetArray(x: Item[], n: Item) {
  const set = new Set<number>();
  const arr = [n];
  set.add(n.date.valueOf());
  x.forEach((t) => {
    const tt = t.date.valueOf();
    if (!set.has(tt)) {
      set.add(tt);
      arr.push(t);
    }
  });
  return arr;
}

export function copy(
  e: React.MouseEvent<HTMLInputElement, MouseEvent>,
  x: number | string,
  prefix: string
) {
  e.currentTarget.select();
  var copyDOM = document.querySelector("." + prefix + x);
  if (copyDOM === null) {
    notification["error"]({
      message: "复制失败，请手动复制！",
    });
    return;
  }
  window.getSelection()?.removeAllRanges();
  var range = document.createRange();
  range.selectNode(copyDOM);
  window.getSelection()?.addRange(range);
  var successful = document.execCommand("copy");
  if (successful) {
    notification["success"]({
      message: "复制成功",
    });
  } else {
    notification["error"]({
      message: "复制失败，请手动复制！",
    });
  }
}
