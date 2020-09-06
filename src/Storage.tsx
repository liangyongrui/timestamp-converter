import "./App.less";
import React from "react";
import { Table, Space, Button } from "antd";
import Item from "./model";
import { copy } from "./utils";

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
        <Button type="link" className={`id${trim}`} onClick={() => copy(trim)}>
          {text}
        </Button>
      );
    },
  },
  {
    title: "时间戳",
    dataIndex: "key",
    key: "key",
    render: (text: number) => (
      <Button type="link" className={`id${text}`} onClick={() => copy(text)}>
        {text}
      </Button>
    ),
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",
    render: (
      {
        top,
        remove,
      }: { top: (n: number) => void; remove: (n: number) => void },
      all: any
    ) => (
      <Space size="middle">
        <Button type="link" onClick={() => top(all.key)}>
          置顶
        </Button>
        <Button type="link" onClick={() => remove(all.key)}>
          删除
        </Button>
      </Space>
    ),
  },
];

function Storage({
  storageItems,
  top,
  remove,
}: {
  storageItems: Item[];
  top: (n: number) => void;
  remove: (n: number) => void;
}) {
  const data = storageItems
    .map((t) => t.date)
    .map((t) => ({
      key: t.getTime(),
      dateTime: t.toLocaleString("chinese", { hour12: false }),
      action: { top, remove },
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

export default Storage;
