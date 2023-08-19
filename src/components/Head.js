import React from "react";
import { InputNumber, Select, Space } from "antd";
const { Option } = Select;

/// onChange values  val1 val2 result

const Head = (props) => (
  <Space direction="vertical">
    <InputNumber
      addonBefore="+"
      value={props.values.val1}
      onChange={(value) => {
        if (typeof value === "number") {
          props.onChange({ val1: value });
        }
      }}
      defaultValue={0}
    />
    <InputNumber
      value={props.values.val2}
      addonBefore={
        <Select
          value={props.operation}
          defaultValue="plus"
          style={{
            width: 60,
          }}
          onChange={(value) => {
            console.log(value);
            props.onChange({ operation: value });
          }}
        >
          <Option value="plus">+</Option>
          <Option value="minus">-</Option>
          <Option value="divide">:</Option>
          <Option value="multiply">*</Option>
        </Select>
      }
      defaultValue={0}
      onChange={(value) => {
        if (typeof value === "number") {
          props.onChange({ val2: value });
        }
      }}
    />
    {`Результат : ${props.values.result}`}
  </Space>
);
export default Head;
