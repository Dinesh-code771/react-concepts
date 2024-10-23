import React, { useEffect, useMemo, useRef } from "react";
import { useState } from "react";
import "../Styles/List.css";
import SingleList from "./SingleList";
import { useReducer } from "react";
import useGetData from "../hooks/useGetData";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
export default function List() {
  const inputRef = useRef(null);
  const [newName, setNewName] = useState("");
  const [fetchToggle, setFetchToggle] = useState(false);

  const fetchUsers = async () => {
    const response = await axios.get("http://localhost:8000/users");
    const data = response.data;
    return data;
  };
  //fetch data
  // const { data: emps, isLoading } = useGetData(
  //   "http://localhost:8000/users",
  //   fetchToggle
  // );

  const {
    data: emps,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    onSuccess: (data) => {
      console.log("Data fetched successfully:", data);
    },
  });

  console.log(isLoading,"sd")
  //complext logic or logic that excute on a perticularstate state
  const count = useMemo(() => {
    return emps?.length;
  }, [emps]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleChnage(e) {
    setNewName(e.target.value);
  }
  function makeRequest(name) {
    // console.log("making request", name);
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      makeRequest(newName);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [newName]);

  async function sendNameToTheServer() {
    if (newName === "") {
      alert("Please enter a name");
      return;
    }
    // const res = await fetch("http://localhost:3000/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     id: emps.length + 1,
    //     name: newName,
    //   }),
    // });
    // const data = await res.json();
    const newEmp = {
      id: emps.length + 1,
      name: newName,
    };
    const response = await axios.post("http://localhost:8000/users", newEmp);
    setFetchToggle(!fetchToggle);
    setNewName("");
  }

  return (
    <div className="listContainer">
      <h1 className="listHeading">Names</h1>
      <div className="inputWrapper">
        {/* input feild */}
        <input
          type="text"
          ref={inputRef}
          placeholder="Enter Name"
          className="input"
          value={newName}
          onChange={handleChnage}
        />

        <h3>{count}</h3>
        {/* button */}
        <button className="button" onClick={sendNameToTheServer}>
          +
        </button>
      </div>

      {isLoading ? (
        <span className="loader"></span>
      ) : (
        <ul className="lists">
          {emps.map((emp, index) => (
            <div key={index} className="listWrapper">
              <SingleList
                fetchToggle={fetchToggle}
                setFetchToggle={setFetchToggle}
                emp={emp}
                emps={emps}
              />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}
