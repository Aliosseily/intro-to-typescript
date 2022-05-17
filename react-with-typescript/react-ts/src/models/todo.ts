// type Todo
// intrerface Todo

// using typescript we declare the properties and their types, then use contrucotr to assign values to them
// this class acts not only just as a constructor function to create ne objects, bur also as a
// type. you can use your class name as a type
class Todo {
  id: string;
  text: string;
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

// using vanilla javascript we directly use constructo to initalize objects
// and assign values to the properties
// class Todo {
//     constructor(todoText: string) {
//       this.text = todoText;
//       this.id = new Date().toISOString();
//     }
//   }

export default Todo;
