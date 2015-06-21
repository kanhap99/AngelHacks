Users = new Mongo.Collection("Users");


Template.entryForm.helpers({
    userName : function() {
	return Metro.users.email;
    }
});
Router.route('/', function() {
    this.render('entryForm');
});
Router.route('/teacherForm', function() {
		this.render('teacherForm');
  	}
);
Router.route('/studentForm', function() {
		this.render('studentForm');
        }
);
