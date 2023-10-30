// @ts-nocheck
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, editTodo } from "../redux/reducers/TodoReducer";

export default function TodoInput() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const setEditTodos = useSelector((state) => state.todo.setEditTodos);

  useEffect(() => {
    if (setEditTodos && setEditTodos.value) {
      setInput(setEditTodos.value);
    }
  }, [setEditTodos]);

  function submitHandler(event) {
    event.preventDefault();
    if (setEditTodos) {
      dispatch(editTodo(setEditTodos.id, input));
      setInput("");
    } else {
      dispatch(addTodos(input));
      setInput("");
    }
  }

  function handlerInput(e){
    setInput(e.target.value)
  }
  return (
    <>
      <form className="flex justify-center">
        <input
          type="text"
          placeholder="What to do...."
          className="rounded border-2 border-black py-3 px-3 w-80 mx-4 md:max-md"
          value={input}
          onChange={handlerInput}
        />
        <button
          className="rounded border-2 bg-cyan-500 text-neutral-50 px-5 py-2"
          onClick={submitHandler}
        >
          {setEditTodos ? "Edit" : "Add"}
        </button>
      </form>
    </>
  );
}
