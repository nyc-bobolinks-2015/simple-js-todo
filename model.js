function Task(opts) {
  opts = opts || {};
  this.description = opts.description || '';
  this.done = opts.done || false;
}

function TodoList(tasks) {
  if (!tasks) {
    var saved = ListPersistence.loadList();
    if (saved) {
      tasks = saved.tasks;
    }
  }
  this.tasks = tasks || [];
}

TodoList.prototype.addTask = function(task) {
  this.tasks.push(task);
  ListPersistence.saveList(this);
};


var ListPersistence = {
  KEY: 'TODO_LIST',
  saveList: function(list){
    localStorage.setItem(this.KEY, JSON.stringify(list));
  },
  loadList: function() {
    var s = localStorage.getItem(this.KEY);
    console.log(s);
    if (s) {
      return JSON.parse(s);
    }    
  }
};
