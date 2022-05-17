import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

// React.FC type is generic and the concrete value I'm plugging in now is my own props object
// where I describe my own props for this specific fumnctional component.
// It is generic because dufferent functional components have different props definitions.

//  this angle brackets index is the generic type syntax here,and by adding it here, we actually
//  unlock a feature built into this FC type, which we're using here,which we'll merge,
//  whichever object type we're defining here with that base object type, with the children property.

// so we merge our own props definition(items array of string) with built in props (props.children)
// between angle brackets you define you own props
// React.FC<{ items?: string[] }> if you add ? to props, taht mean that tis prop is optional
// but then you should handle the case that if we don't have items

// to acces props.children, add  children: React.ReactNode

/* note that with all those type annotations,and all those classes we're using here,
we are making it very clear which shape our data should have which shape our components should have.
And that simply allows us as a developer to ensure that this code is clean, that it has a clear structure,
and that's it's way harder to misuse our components or our data.
And that errors can be prevented during development instead of at runtime, when we test the app.*/
const Todos: React.FC<{
  items: Todo[];
  onDeleteTodo: (text: string) => void;
}> = (props) => {
  const onDelete = (id: string) => {
    props.onDeleteTodo(id);
  };

  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onClickTodo={() => {
            onDelete(item.id);
          }}
        />
      ))}
    </ul>
  );
};

export default Todos;
