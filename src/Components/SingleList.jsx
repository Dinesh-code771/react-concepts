import React from "react";
import { useState } from "react";
import { DataContext } from "../App";
import { useContext } from "react";
export default function SingleList({ emp, emps, setemps }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState(emp.name);
  return (
    <>
      <li className="list" key={emp.name}>
        {isEdit ? <input value={""} className="input" type="text" /> : emp.name}
      </li>
      <button
        className="deleteButton"
        onClick={() => {
          const newEmps = emps.filter((employe) => employe.name !== emp.name);
          setemps(newEmps);
        }}
      >
        Delete
      </button>
      <button
        className="editButton"
        onClick={() => {
          setIsEdit(!isEdit);
          const newEmps = emps.map((employe) => {
            if (employe.name === emp.name) {
              return {
                ...employe,
                name: newName,
              };
            }
            return employe;
          });
          setemps(newEmps);
        }}
      >
        {isEdit ? "Save" : "Edit"}
      </button>
    </>
  );
}
