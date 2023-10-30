// @ts-nocheck
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeStatus } from "../redux/reducers/TodoReducer";

export default function TodoList() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  function checkHandle(id) {
    dispatch(changeStatus(id))
  }
  return (
    <div className="flex flex-col justify-center items-center p-4 gap-5">
      {todos.map((todo) => (
        <div
          className="rounded border-2 border-black py-2 px-3 w-96 flex justify-between"
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
            <button>✏</button> <button>❌</button>
          </div>
        </div>
      ))}
    </div>
  );
}
