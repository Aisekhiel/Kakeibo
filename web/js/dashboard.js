
var dashboard = {
	construct : function() {
		console.log('- dashboard.construct()');
		var self = this;
		self.$body = $('body');
		self.$body.find('.fixybar').fixybar();
	},
};


// Init
$(function() {
	dashboard.construct();
});
