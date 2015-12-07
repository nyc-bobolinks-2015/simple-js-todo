function View($element) {
  this.$element = $element;
}

View.prototype.drawList = function(todoList) {
  var output = '';
  for(var i=0; i<todoList.tasks.length; i++) {
    var task = todoList.tasks[i];
    output += '<li>';
    output += task.description + ' ';
    output += task.done ? '(complete)' : '(incomplete)';
    output += '</li>';
  }
  this.$element.html(output);
};

View.prototype.handleFormEvent = function(event) {
  event.preventDefault();
  var form = event.target;
  var params = { 
    description: $('#task_description').val(), 
    done: $('#task_done').prop('checked')
   };
  this.ctrl.addTask(params);
};
