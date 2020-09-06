import "./App.less";
import React from "react";
import { Table, Space, notification } from "antd";
import Item from "./model";

function getMonthLast(date: Date) {
  let year = date.getFullYear();
  let month = date.getMonth() + 2;
  if (month > 12) {
    year += 1;
    month = 1;
  }
  const newDate = new Date(year, month - 1, 1);
  return new Date(newDate.getTime() - 1000 * 60 * 60 * 24);
}

/**
 * 获取建议日期
 */
export function getSuggestItems(text: string) {
  const res = [];

  const raw = new Date(text);
  const value = text.split("").filter((t) => t >= "0" && t <= "9");
  const now = new Date();
  if (value.length == 4) {
    // 月 日
    const s =
      now.getFullYear() + "-" + value[0] + value[1] + "-" + value[2] + value[3];
    const d = new Date(s);
    if (!isNaN(d.getTime())) {
      d.setHours(0, 0, 0, 0);
      res.push(d);
    }
  }
  if (isNaN(raw.getTime()) || raw.getTime() < 0) {
    const value = text.split("").filter((t) => t >= "0" && t <= "9");
    const now = new Date();
    if (value.length == 6) {
      // 年月
      const d = new Date(
        value[0] + value[1] + value[2] + value[3] + "-" + value[4] + value[5]
      );
      if (!isNaN(d.getTime())) {
        d.setHours(0, 0, 0, 0);
        res.push(d);
      }
    }
    if (value.length == 8) {
      // 年月日
      const s =
        value[0] +
        value[1] +
        value[2] +
        value[3] +
        "-" +
        value[4] +
        value[5] +
        "-" +
        value[6] +
        value[7];
      const d = new Date(s);
      if (!isNaN(d.getTime())) {
        d.setHours(0, 0, 0, 0);
        res.push(d);
      }
    }
    if (value.length == 9) {
      // 年 月 日 小时
      const s =
        value[0] +
        value[1] +
        value[2] +
        value[3] +
        "-" +
        value[4] +
        value[5] +
        "-" +
        value[6] +
        value[7] +
        " 0" +
        value[8] +
        ":00";
      const d = new Date(s);
      if (!isNaN(d.getTime())) {
        res.push(d);
      }
    }
    if (value.length == 10) {
      // 年 月 日 小时
      const s =
        value[0] +
        value[1] +
        value[2] +
        value[3] +
        "-" +
        value[4] +
        value[5] +
        "-" +
        value[6] +
        value[7] +
        " " +
        value[8] +
        value[9] +
        ":00";
      const d = new Date(s);
      if (!isNaN(d.getTime())) {
        res.push(d);
      }
    }
    if (value.length == 11) {
      // 年 月 日 小时
      const s =
        value[0] +
        value[1] +
        value[2] +
        value[3] +
        "-" +
        value[4] +
        value[5] +
        "-" +
        value[6] +
        value[7] +
        " " +
        value[8] +
        value[9] +
        ":0" +
        value[10];
      const d = new Date(s);
      if (!isNaN(d.getTime())) {
        res.push(d);
      }
    }
    if (value.length == 12) {
      // 年 月 日 小时
      const s =
        value[0] +
        value[1] +
        value[2] +
        value[3] +
        "-" +
        value[4] +
        value[5] +
        "-" +
        value[6] +
        value[7] +
        " " +
        value[8] +
        value[9] +
        ":" +
        value[10] +
        value[11];
      const d = new Date(s);
      if (!isNaN(d.getTime())) {
        res.push(d);
      }
    }
  } else {
    res.push(raw);
  }
  const rawUt = new Date(parseInt(text));
  if (!isNaN(rawUt.getTime())) {
    res.push(rawUt);
  }
  // 今天开始
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  res.push(todayStart);

  // 今天结束
  const todayEnd = new Date();
  todayEnd.setHours(23, 59, 59, 999);
  res.push(todayEnd);

  // 本月开始
  const thisMonthStart = new Date();
  thisMonthStart.setDate(1);
  thisMonthStart.setHours(0, 0, 0, 0);
  res.push(thisMonthStart);

  // 本月结束
  res.push(getMonthLast(new Date()));

  // now
  res.push(new Date());

  return res.map((t) => ({
    date: t,
  }));
}

function copy(x: number | string) {
  var copyDOM = document.querySelector(".id" + x);
  if (copyDOM == null) {
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

const columns = [
  {
    title: "日期时间",
    dataIndex: "dateTime",
    key: "dateTime",
    render: (text: string) => {
      const trim = text
        .replaceAll(" ", "")
        .replaceAll(":", "")
        .replaceAll("/", "");
      return (
        <a className={`id${trim}`} onClick={() => copy(trim)}>
          {text}
        </a>
      );
    },
  },
  {
    title: "时间戳",
    dataIndex: "key",
    key: "key",
    render: (text: number) => (
      <a className={`id${text}`} onClick={() => copy(text)}>
        {text}
      </a>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (action: (n: number) => void, all: any) => {
      return (
        <Space size="middle">
          <a onClick={() => action(all.key)}>保存</a>
        </Space>
      );
    },
  },
];

export default function Suggest({
  suggests,
  save,
}: {
  suggests: Item[];
  save: (n: number) => void;
}) {
  const data = suggests
    .map((t) => t.date)
    .map((t) => ({
      key: t.getTime(),
      dateTime: t.toLocaleString("chinese", { hour12: false }),
      action: save,
    }));
  return (
    <Table
      style={{ width: "1000px" }}
      columns={columns as any}
      dataSource={data}
      pagination={false}
    />
  );
}
