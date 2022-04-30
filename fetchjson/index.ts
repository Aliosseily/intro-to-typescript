import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// interfaces in typescript are used to define the structure of an object
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;
  //logTodo(id, completed, title); will got error because not same order
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    Todo with Id ${id} 
    has a title of ${title} 
    is it finished ${completed}`);
};
