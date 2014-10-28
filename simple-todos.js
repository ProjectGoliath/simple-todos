// simple-todos.js

Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  // This code only runs on the client
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({});
    }
  });


  Template.body.events({
  "submit .new-task": function (event) {
    // This function is called when the new task form is submitted

    var text = event.target.text.value;

    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    });

    // Clear form
    event.target.text.value = "";

    // Prevent default form submit
    return false;
    },

    // Add to Template.body.events...checkbox to 'hide complete tasks'
    "click .hide-completed": function () {
    Session.set("hideCompleted", ! Session.get("hideCompleted"));
      }
  });



// Replace the existing Template.body.helpers...displays list as latest and hide complete tasks check
Template.body.helpers({
  tasks: function () {
    if (Session.get("hideCompleted")) {
      // If hide completed is checked, filter tasks
      return Tasks.find({checked: {$ne: true}}, {sort: {createdAt: -1}});
    } else {
      // Otherwise, return all of the tasks
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  },
  hideCompleted: function () {
    return Session.get("hideCompleted");
  },
  // Add to Template.body.helpers...show number of incomplete tasks
  incompleteCount: function () {
    return Tasks.find({checked: {$ne: true}}).count();
  }
});




  // In the client code, below everything else
  Template.task.events({
  "click .toggle-checked": function () {
    // Set the checked property to the opposite of its current value...checks or unchecks item
    Tasks.update(this._id, {$set: {checked: ! this.checked}});
    },
  "click .delete": function () { //deletes item
    Tasks.remove(this._id);
    }
  });
}

