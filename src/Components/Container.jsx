import React from "react";
import MultiSelect from "./MultiSelect";

export default function Container() {
  return (
    <div>
      <MultiSelect
        placeholder={"select user..."}
        options={["Dinesh", "Sunitha", "Ravi"]}
      />
    </div>
  );
}
