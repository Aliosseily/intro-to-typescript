import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObject = {
  items: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
};

// createContext is a generic type, so we can use <> to better describe our context object
export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  // todos has never[] type, which means that it always must be an empty array, we can't push values to it.
  // const [todos, setTodos] = useState([]);
  // in this case we tell typescript that todos state has a empty array as initial value
  //and also it will conntains Todo items.
  const [todos, setTodos] = useState<Todo[]>([]);
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevState) => prevState.concat(newTodo));
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  const contextValues: TodosContextObject = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValues}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
