import React from "react";
import classes from "./TodoItem.module.css";
// import Todo from "../models/todo";

// you can use React.FC<{ item: Todo }, but then you should use props.item.text
const TodoItem: React.FC<{
  text: string;
  onClickTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item} onClick={props.onClickTodo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
