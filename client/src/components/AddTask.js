import React, { useState } from "react";
import axios from "axios";
import HeadBar from "./HeadBar";
import { Link } from "react-router-dom";

const AddTask = () => {
  const [task, setTask] = useState({
    tname: "",
    tdescription: "",
    endDate: "",
    endTime: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/new", task, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <HeadBar />

      <form onSubmit={handleSubmit} className="w-5/12 mt-10 mx-auto">
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 mb-8 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </Link>
        <h1 className="text-4xl font-bold mb-10">Task Details</h1>
        <div className="mb-6">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Task Name :
          </label>
          <input
            type="text"
            id="tname"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
            value={task.tname}
            onChange={(e) =>
              setTask({
                ...task,
                tname: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="mb-6">
          <label
            for="tmessage"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Describe the Task :
          </label>
          <textarea
            id="tmessage"
            name="tmessage"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            value={task.tdescription}
            onChange={(e) =>
              setTask({
                ...task,
                tdescription: e.target.value,
              })
            }
          ></textarea>
        </div>
        <div className="mb-10">
          <label
            for="tendDate"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Pick the Deadline :
          </label>
          <input
            type="date"
            id="tendDate"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            value={task.endDate}
            onChange={(e) =>
              setTask({
                ...task,
                endDate: e.target.value,
              })
            }
            required
          />
        </div>

        <div className="mb-10">
          <label
            for="tendDate"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Pick the Time :
          </label>
          <input
            type="time"
            id="tendDate"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            value={task.endTime}
            onChange={(e) =>
              setTask({
                ...task,
                endTime: e.target.value,
              })
            }
            required
          />
        </div>

        <button
          type="submit"
          className="mb-10 text-white bg-gray-800 hover:bg-white hover:text-gray-800 hover:border hover:border-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-3 text-center "
        >
          Add New Task
        </button>
      </form>
    </>
  );
};

export default AddTask;
