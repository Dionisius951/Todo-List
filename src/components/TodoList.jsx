// @ts-nocheck
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatus,
  DeleteTodo,
  setEditTodo,
} from "../redux/reducers/TodoReducer";

export default function TodoList() {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("All");
  const { todos } = useSelector((state) => state.todo);
  const [filteredTodos, setFilteredTodos] = useState(todos);

  function checkHandle(id) {
    dispatch(changeStatus(id));
  }

  function deleteHandler(id) {
    dispatch(DeleteTodo(id));
  }

  function editHandler(id) {
    dispatch(setEditTodo(id));
  }

  function handlerButton(status) {
    setFilter(status);
    if (status === "All") {
      setFilteredTodos(todos);
    } else if (status === "Active") {
      const activeTodos = todos.filter((todo) => !todo.status);
      setFilteredTodos(activeTodos);
    } else if (status === "Complete") {
      const completeTodos = todos.filter((todo) => todo.status);
      setFilteredTodos(completeTodos);
    }
  }

  return (
    <div className="container flex flex-col justify-center items-center">
      <div className="button w-96">
        <div className="flex gap-5">
          <button
            className={`border-2 rounded py-2 px-4 ${
              filter === "All"
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-black"
            }`}
            onClick={() => handlerButton("All")}
          >
            All
          </button>
          <button
            className={`border-2 rounded py-2 px-4 ${
              filter === "Active"
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-black"
            }`}
            onClick={() => handlerButton("Active")}
          >
            Active
          </button>
          <button
            className={`border-2 rounded py-2 px-4 ${
              filter === "Complete"
                ? "border-blue-600 bg-blue-600 text-white"
                : "border-black"
            }`}
            onClick={() => handlerButton("Complete")}
          >
            Complete
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-4 gap-5">
        {filteredTodos.map((todo) => (
          <div
            className="rounded border-2 border-black py-3 px-4 w-96 flex justify-between"
            key={todo.id}
          >
            <div className={`flex gap-3 ${todo.status ? "line-through" : ""}`}>
              <input
                type="checkbox"
                defaultChecked={todo.status}
                onClick={() => checkHandle(todo.id)}
              />
              {todo.value}
            </div>
            <div className="icon flex justify-between gap-3">
              <button id="edit" onClick={() => editHandler(todo)}>
                ✏
              </button>
              <button onClick={() => deleteHandler(todo.id)}>❌</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
