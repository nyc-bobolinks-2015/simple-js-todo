function Task(opts) {
  opts = opts || {};
  this.description = opts.description || '';
  this.done = opts.done || false;
}

function TodoList(tasks) {
  if (!tasks) {
    tasks = ListPersistence.loadTasks();
  }
  this.tasks = tasks || [];
}

TodoList.prototype.addTask = function(task) {
  this.tasks.push(task);
  ListPersistence.saveTasks(this.tasks);
};


var ListPersistence = {
  KEY: 'TODO_LIST',
  saveTasks: function(tasks){
    localStorage.setItem(this.KEY, JSON.stringify(tasks));
  },
  loadTasks: function() {
    var s = localStorage.getItem(this.KEY);
    console.log(s);
    if (s) {
      return JSON.parse(s);
    }    
  }
};
