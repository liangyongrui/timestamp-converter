import "./App.less";
import React from "react";
import { Table, Space, Button, Input } from "antd";
import Item from "./model";
import { copy, unique } from "./utils";
import dayjs from "dayjs";

function tryParse(text: string) {
  const res = [];
  const value = text.split("").filter((t) => t >= "0" && t <= "9");
  const now = dayjs();
  if (value.length === 4) {
    // 月 日
    const s =
      now.year() + "-" + value[0] + value[1] + "-" + value[2] + value[3];
    const d = dayjs(s);
    if (d.isValid()) {
      res.push(d.startOf("day"));
    }
  }
  if (value.length === 6) {
    // 年月
    const d = dayjs(
      value[0] + value[1] + value[2] + value[3] + "-" + value[4] + value[5]
    );
    if (d.isValid()) {
      res.push(d.startOf("day"));
    }
  }
  if (value.length === 8) {
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
    const d = dayjs(s);
    if (d.isValid()) {
      res.push(d.startOf("day"));
    }
  }
  if (value.length === 9) {
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
    const d = dayjs(s);
    if (d.isValid()) {
      res.push(d);
    }
  }
  if (value.length === 10) {
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
    const d = dayjs(s);
    if (d.isValid()) {
      res.push(d);
    }
  }
  if (value.length === 11) {
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
    const d = dayjs(s);
    if (d.isValid()) {
      res.push(d);
    }
  }
  if (value.length === 12) {
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
    const d = dayjs(s);
    if (d.isValid()) {
      res.push(d);
    }
  }
  return res;
}

/**
 * 获取建议日期
 */
export function getSuggestItems(text: string) {
  let res = [];
  {
    const n = parseInt(text);
    if (n >= 1000000000 && n <= 2000000000000) {
      const rawUt = dayjs(n);
      if (rawUt.isValid()) {
        res.push(rawUt);
      }
    }
  }
  const raw = dayjs(text);
  if (raw.isValid()) {
    res.push(raw);
  }
  res = res.concat(tryParse(text));
  // 今天开始
  const todayStart = dayjs().startOf("day");
  res.push(todayStart);

  // 今天结束
  const todayEnd = dayjs().endOf("day");
  res.push(todayEnd);

  // 本月开始
  const thisMonthStart = dayjs().startOf("month");
  res.push(thisMonthStart);

  // 本月结束
  res.push(dayjs().endOf("month"));

  // now
  res.push(dayjs());

  return res.map((t) => ({
    date: t,
  }));
}
const prefix = "suggest";
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
        <Input
          onClick={(e) => copy(e, trim, prefix)}
          className={`${prefix}${trim}`}
          bordered={false}
          value={text}
          readOnly
        />
      );
    },
  },
  {
    title: "时间戳",
    dataIndex: "key",
    key: "key",
    render: (text: number, all: any) => {
      let color;
      if (parseInt(all.highlightText) === text) {
        color = "rgba(255, 251, 0, 0.85)";
      } else {
        color = "rgba(255, 255, 255, 0.85)";
      }
      return (
        <Input
          onClick={(e) => copy(e, text, prefix)}
          className={`${prefix}${text}`}
          bordered={false}
          style={{ color: color }}
          value={text}
          readOnly
        />
      );
    },
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (action: (n: number) => void, all: any) => {
      return (
        <Space size="middle">
          <Button type="link" href="#" onClick={() => action(all.key)}>
            保存
          </Button>
        </Space>
      );
    },
  },
];

export default function Suggest({
  suggests,
  highlightText,
  save,
}: {
  suggests: Item[];
  highlightText: string;
  save: (n: number) => void;
}) {
  const data = unique(suggests)
    .map((t) => t.date)
    .filter((t) => t.valueOf() >= 0)
    .map((t) => ({
      key: t.valueOf(),
      dateTime: t.format("YYYY-MM-DD HH:mm:ss"),
      highlightText,
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
