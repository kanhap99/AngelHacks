if (Meteor.isClient) {
  Template.taskList.helpers({
    task : function() {
      return TaskList.find();
    }   
  });
  
  Template.taskList.events({
    'click .showTask' : function() {
      var playerID = this._id;
      Session.set('selectedPlayer',playerID); //Session.set(name_of_session,value passed to session)
    },
    'submit form' : function(event) {
       event.preventDefault(); //prevents the current event from executing its default functionality
       var taskName = event.target.name.value;
       console.log(taskName);
    }
  });
  
  Template.addTask.events({
    'submit form' : function(event) {
      event.preventDefault();
      var taskName = event.target.taskName.value;
      var taskDesc = event.target.description.value;
      var hours = event.target.hours.value;
      TaskList.insert(
      {
	NAME : taskName,
	DATE : new Date().getDate(),
	DESC : taskDesc,
	HOURS : hours
      });
    }   
  });
  

  //just rendering template to view current database  
  Template.viewDB.helpers({
    doc : function() {
      return TaskList.find();
    }
  });
}

if (Meteor.isServer) {

}
TaskList = new Mongo.Collection('tasks');
