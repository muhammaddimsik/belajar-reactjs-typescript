import React, { useState, useRef, useEffect } from "react";
import { todos } from "../Model";
import { AiOutlineCheck, AiFillDelete, AiFillEdit } from "react-icons/ai";

interface Props {
  todo: todos;
  index: number;
  todos: todos[];
  setTodos: React.Dispatch<React.SetStateAction<todos[]>>;
}

const SingleTodo: React.FC<Props> = ({ index, todos, setTodos, todo }) => {
  const handleDone = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [edit, setEdit] = useState<string>(todo.todo);
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((item) => (item.id === id ? { ...item, todo: edit } : item))
    );

    setIsEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit]);

  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      key={index}
      className="single-todo"
    >
      {isEdit ? (
        <input
          ref={inputRef}
          type="string"
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
          className="todo-edit"
        />
      ) : todo.isDone ? (
        <s className="todo-name">{todo.todo}</s>
      ) : (
        <span className="todo-name">{todo.todo}</span>
      )}
      <div>
        <span className="todo-icon" onClick={() => handleDone(todo.id)}>
          <AiOutlineCheck />
        </span>
        <span className="todo-icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="todo-icon" onClick={() => setIsEdit(true)}>
          <AiFillEdit />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
