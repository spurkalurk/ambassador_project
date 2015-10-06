

var app = angular.module('formApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: '/form.html',
			controller: 'FormController'
		})

		.when("/:name",
   		 {
	      templateUrl: "/app.html",
	      controller: "FormController",
	      
   		 })

		// .otherwise(
		// {
		// 	redirectTo: '/404',
		// 	templateUrl: '/404.html'
		// });
});



app.controller('HeaderController', ['$location', function($location) {
    var self = this;

    self.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}]);

app.controller('FormController', ['$routeParams', '$location', function($routeParams, $location) {

	var self = this;

	self.test = "test test";

	self.referrals= [
		{ name: 'Bob', clicks: 0},
		{ name: 'Harry', clicks: 0}
	];

	self.add = function(entry) {
		var newRef = {
			name: entry,
			clicks: 0
		};
		self.referrals.push(newRef);

		console.log(self.name);

	};


	self.remove = function(item) {
		self.referrals.splice(self.referrals.indexOf(item), 1);
	};

	self.store= function(clicked) {
		self.storedName= clicked;
	}


}]);

