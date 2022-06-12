import React from "react";
import TodoBody from "../TODO-BODY/TodoBody";
import TodoTitle from "../TODO-TITLE/TodoTitle";

const TodoContainer = () => {
  return (
    <>
      <div>
        <TodoTitle />
        <TodoBody />
      </div>
    </>
  );
};

export default TodoContainer;
