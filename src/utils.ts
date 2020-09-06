import Item from "./model";
import { notification } from "antd";

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

export function copy(x: number | string) {
  var copyDOM = document.querySelector(".id" + x);
  if (copyDOM === null) {
    notification["error"]({
      message: "复制失败，请手动复制！",
    });
    return;
  }
  var range = document.createRange(); //创建一个range
  window.getSelection()?.removeAllRanges(); //清楚页面中已有的selection
  range.selectNode(copyDOM); // 选中需要复制的节点
  window.getSelection()?.addRange(range); // 执行选中元素
  var successful = document.execCommand("copy"); // 执行 copy 操作
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
