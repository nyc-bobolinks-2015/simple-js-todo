function Task(opts) {
  opts = opts || {};
  this.description = opts.description || '';
  this.done = opts.done || false;
}

function TodoList(tasks) {
  if (!tasks) {
    var saved = ListPersister.loadList();
    if (saved) {
      tasks = saved.tasks;
    }
  }
  this.tasks = tasks || [];
}

TodoList.prototype.addTask = function(task) {
  this.tasks.push(task);
  ListPersister.saveList(this);
};


var ListPersister = {
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
