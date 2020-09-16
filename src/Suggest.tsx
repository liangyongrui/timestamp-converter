import "./App.less";
import React from "react";
import { Table, Space, Button, Input } from "antd";
import Item from "./model";
import { copy } from "./utils";
import dayjs from "dayjs";

/**
 * 获取建议日期
 */
export function getSuggestItems(text: string) {
  const res = [];

  const raw = dayjs(text);
  const value = text.split("").filter((t) => t >= "0" && t <= "9");
  const now = dayjs();
  if (value.length === 4) {
    // 月 日
    const s =
      now.year() + "-" + value[0] + value[1] + "-" + value[2] + value[3];
    const d = dayjs(s);
    if (!isNaN(d.valueOf())) {
      res.push(d.startOf("day"));
    }
  }
  if (isNaN(raw.valueOf()) || raw.valueOf() < 0) {
    const value = text.split("").filter((t) => t >= "0" && t <= "9");
    if (value.length === 6) {
      // 年月
      const d = dayjs(
        value[0] + value[1] + value[2] + value[3] + "-" + value[4] + value[5]
      );
      if (!isNaN(d.valueOf())) {
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
      if (!isNaN(d.valueOf())) {
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
      if (!isNaN(d.valueOf())) {
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
      if (!isNaN(d.valueOf())) {
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
      if (!isNaN(d.valueOf())) {
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
      if (!isNaN(d.valueOf())) {
        res.push(d);
      }
    }
  } else {
    res.push(raw);
  }
  const rawUt = dayjs(parseInt(text));
  if (!isNaN(rawUt.valueOf())) {
    res.push(rawUt);
  }
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
    render: (text: number) => (
      <Input
        onClick={(e) => copy(e, text, prefix)}
        className={`${prefix}${text}`}
        bordered={false}
        value={text}
        readOnly
      />
    ),
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
  save,
}: {
  suggests: Item[];
  save: (n: number) => void;
}) {
  const data = suggests
    .map((t) => t.date)
    .map((t) => ({
      key: t.valueOf(),
      dateTime: t.format("YYYY-MM-DD HH:mm:ss"),
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
