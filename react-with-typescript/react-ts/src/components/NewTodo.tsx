import React, { useRef } from "react";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  // useRef is a generic type
  // we should tell typescript what kind of input we want to connect this ref to
  // useRef<HTMLInputElement> we tell typescript that ref we are creating here will be
  // connected to an HTMLInputElement
  // and also we have to add default value beacuse this ref could be assign for other elements matbe
  // by adding null, then we are creating a ref which will eventually be connected to anHTMLInputElement
  // but which has no initial value
  // that's how we create a ref when using typescript

  const todoTextInputRef = useRef<HTMLInputElement>(null);
  // React.FormEvent is a scpecial type provided by React package, which is this event object type
  // well get automatically when listening to the form submission

  // React.MouseEvent use it when u=you have onClick listener
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    //current?.value you may have use todoTextInputRef.current before estabishig a connection
    // with form, so todoTextInputRef.current will be undefined
    // if you 100% sure that todoTextInputRef.current will not be null ever, then you can use ! instead
    // const enteredText = todoTextInputRef.current?.value;
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // throw an Error
      return;
    }
    props.onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
