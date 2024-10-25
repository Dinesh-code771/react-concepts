import React from "react";
import { useState } from "react";
import { DataContext } from "../App";
import { useContext } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
export default function SingleList({ emp, emps, setFetchToggle, fetchToggle }) {
  const [isEdit, setIsEdit] = useState(false);
  const [newName, setNewName] = useState(emp.name);
  const queryClient = useQueryClient();
  async function deleteEmp() {
    // const res = await fetch(`http://localhost:3000/users/${parseInt(emp.id)}`, {
    //   method: "DELETE",
    // });
    try {
      const res = await axios.delete(
        `http://localhost:8000/users/${parseInt(emp.id)}`
      );
      if (res.status === 200) {
        console.log("edited in server");
        queryClient.invalidateQueries(["users"]);
      }
    } catch (err) {
      console.log(err);
    }
  }

  const mutation = useMutation({
    mutationFn: deleteEmp,
  });

  async function editEmp() {
    setIsEdit(!isEdit);
    // const res = await fetch(`http://localhost:3000/users/${parseInt(emp.id)}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name: newName }),
    // });

    try {
      const updatedEmp = { name: newName };
      const res = await axios.put(
        `http://localhost:3000/users/${parseInt(emp.id)}`,
        updatedEmp
      );
      if (res.status === 200) {
        console.log("edited in server");
        setFetchToggle(!fetchToggle);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <li className="list" key={emp.name}>
        {isEdit ? (
          <input
            value={newName}
            className="input"
            type="text"
            onChange={(e) => {
              setNewName(e.target.value);
            }}
          />
        ) : (
          emp.name
        )}
      </li>
      <button
        disabled={mutation.isPending}
        className={` ${mutation.isPending ? "deleteButton" : ""}`}
        onClick={() => {
          mutation.mutate();
        }}
      >
        Delete
      </button>
      <button className="editButton" onClick={editEmp}>
        {isEdit ? "Save" : "Edit"}
      </button>
    </>
  );
}
