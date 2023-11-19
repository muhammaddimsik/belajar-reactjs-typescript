import React from "react";
import { todos } from "../Model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: todos[];
  setTodos: React.Dispatch<React.SetStateAction<todos[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todo-list">
      {todos.map((item, i) => (
        <SingleTodo
          index={i}
          todos={todos}
          todo={item}
          key={item.id}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
