App.Router.map(function() {
	this.resource('app',function(){
		this.resource('reo')
		
		this.resource('projects',function(){
			this.route('project')
		})
	});
});
