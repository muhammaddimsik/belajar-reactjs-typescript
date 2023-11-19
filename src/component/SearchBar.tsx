import React from "react";
import "../index.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const SearchBar: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form onSubmit={handleAdd}>
      <input
        type="search"
        className="search"
        placeholder="Input your todo"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button className="add-btn" type="submit">
        Add
      </button>
    </form>
  );
};

export default SearchBar;
