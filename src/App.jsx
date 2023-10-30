import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container p-3 flex flex-col justify-center items-center gap-5 h-screen">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
