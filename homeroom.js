if (Meteor.isClient) {
  Template.taskList.helpers({
    task : function() {
      return TaskList.find();
    }   
  });
  Template.taskList.events({
    'click .taskBlock' : function() {
      var taskID = this._id;
      Session.set('selectedTask',taskID);  
    },
    'click .remove' : function() {
      var selectedTask = Session.get('selectedTask');
      TaskList.remove(selectedTask);
    }
  });
  Template.addTask.events({
    'submit form' : function(event) {
      //event.preventDefault();
      var taskName = event.target.taskName.value;
      var taskDesc = event.target.description.value;
      var hours = event.target.hours.value;
      var due = event.target.dueDate.value;
      TaskList.insert(
      {
	NAME : taskName,
	DUE : due,
	DESC : taskDesc,
	HOURS : hours
      });
    }
  });
}

if (Meteor.isServer) {

}
TaskList = new Mongo.Collection('tasks');
