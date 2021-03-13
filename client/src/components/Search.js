import { useState } from "react";
import { TreeSelect } from "antd";

const { TreeNode } = TreeSelect;

const SearchBar = ({ data, value, onChange }) => {
  return (
    <TreeSelect
      showSearch
      value={value}
      style={{ width: "100%" }}
      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
      placeholder="Please search your symptoms"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
    >
      {data.map((item) => (
        <TreeNode value={item} title={item} />
      ))}
    </TreeSelect>
  );
};

export default SearchBar;
