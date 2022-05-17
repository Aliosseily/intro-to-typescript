import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import TodosContextProvider from "./store/todos-context";
const App = () => {
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
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onDeleteTodo={removeTodoHandler} />
    </div>
  );
};

// if we use context
// const App = () => {
//   return (
//     <TodosContextProvider>
//       <NewTodo />
//       <Todos />
//     </TodosContextProvider>
//   );
// }

export default App;
