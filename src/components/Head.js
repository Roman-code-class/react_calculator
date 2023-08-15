import React from "react";
import { InputNumber, Select, Space } from "antd";
const { Option } = Select;
const selectBefore = (
  <Select
    defaultValue="add"
    style={{
      width: 60,
    }}
  >
    <Option value="add">+</Option>
    <Option value="minus">-</Option>
    <Option value="divide">:</Option>
    <Option value="multiply">*</Option>
  </Select>
);
const Head = () => (
  <Space direction="vertical">
    <InputNumber addonBefore="+" defaultValue={0} />
    <InputNumber addonBefore={selectBefore} defaultValue={0} />
    <InputNumber defaultValue={0} disabled />
  </Space>
);
export default Head;
