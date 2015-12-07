function Controller(view, todoList) {
  this.view = view;
  this.todoList = todoList;
}

Controller.prototype.addTask = function(params) {
  var task = new Task(params);
  this.todoList.addTask(task);
  this.view.drawList(this.todoList);
};
