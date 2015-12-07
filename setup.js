$(document).ready(function(){
  var view = new View($('#task-list'));
  var list = new TodoList();
  var ctrl = new Controller(view, list);
  view.ctrl = ctrl;
  view.drawList(list);
  
  $('form').on('submit', function(event) {
    view.handleFormEvent(event);
  });
  
});
