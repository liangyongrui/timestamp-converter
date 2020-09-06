import "./App.less";
import React from "react";
import { Table, Space } from "antd";
import Item from "./model";

const columns = [
  {
    title: "日期时间",
    dataIndex: "dateTime",
    key: "dateTime",
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: "时间戳",
    dataIndex: "key",
    key: "key",
    render: (text: number) => <a>{text}</a>,
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
        <a onClick={() => top(all.key)}>置顶</a>
        <a onClick={() => remove(all.key)}>删除</a>
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
