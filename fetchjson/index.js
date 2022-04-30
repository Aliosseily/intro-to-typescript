"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/1";
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    //logTodo(id, completed, title); will got error because not same order
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n    Todo with Id ".concat(id, " \n    has a title of ").concat(title, " \n    is it finished ").concat(completed));
};
