import React, {useState} from "react";

const TodoForm = ({ addToDo }) => {
    const [value, setValue] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!value) return;
      addToDo(value);
      setValue("");
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
      </form>
    );
  }

export default TodoForm

