// @ts-nocheck
import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import bg from "../assets/bg.svg";

export default function Todo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:h-[40rem] md:w-3/4 border-2 border-black-400 md:rounded-lg">
      <div className="img-ct w-full py-5 h-[25rem] md:h-full border-transparent border-2 md:rounded-tl-lg md:rounded-bl-lg bg-blue-300 flex justify-center items-center ">
        <img src={bg} alt="background" className="w-80 md:w-3/4" />
      </div>
      <div className="container p-2 flex flex-col justify-center items-center gap-5 h-full">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}
