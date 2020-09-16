import "./App.less";
import React, { useState, useEffect } from "react";
import { Divider, Input } from "antd";
import Item, { parseItems, stringifyItems } from "./model";
import Suggest, { getSuggestItems } from "./Suggest";
import UtStorage from "./Storage";
import { newSetArray, removeThenNewSetArray } from "./utils";
import dayjs from "dayjs";

const storageKey = "the_world's_best_time-stamp_conversion_website_key";

function App() {
  const [inputValue, setInputValue] = useState("");
  /// 浏览器（将要）储存的数据
  const [storageItems, setStorageItems] = useState<Item[]>([]);
  /// 建议需要给出的数据
  const [suggestItems, setSuggestItems] = useState<Item[]>([]);

  useEffect(() => {
    (async function () {
      setSuggestItems(getSuggestItems(inputValue));
    })();
  }, [inputValue]);

  useEffect(() => {
    setStorageItems(parseItems(localStorage.getItem(storageKey) ?? "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem(storageKey, stringifyItems(storageItems));
  }, [storageItems]);

  function save(n: number) {
    setStorageItems((x) => {
      return newSetArray(x, { date: dayjs(n) });
    });
  }

  function remove(n: number) {
    setStorageItems((x) => {
      return removeThenNewSetArray(x, { date: dayjs(n) });
    });
  }
  return (
    <div className="App">
      <p>这有可能是世界上最好用的 时间戳 转换网站</p>
      <Divider />
      <Input
        size="large"
        style={{ width: "1000px" }}
        placeholder="在这输入你想要输入的内容，无需拘泥于格式"
        bordered={false}
        value={inputValue}
        onChange={(e) => setInputValue(e.currentTarget.value)}
      />
      <Divider />
      <p>猜你想要</p>
      <Suggest save={save} suggests={suggestItems} />
      <Divider />
      <p>Storage</p>
      <UtStorage top={save} remove={remove} storageItems={storageItems} />
    </div>
  );
}

export default App;
