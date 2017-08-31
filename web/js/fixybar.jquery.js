// Sidebar JQuery plugin
(function($) {
	var settings = {};

	$.fn.fixybar = function(params) {
		var action_type = (typeof params == 'string')?'call':'init';
		var action 		= '';
		if(action_type == 'call') {
			// Set the choosen action
			action = params;
		} else {
			// Set settings (defaults + options)
			// Note that the first argument to extend is an empty
			// object – this is to keep from overriding our "defaults" object.
			settings = $.extend({}, $.fn.fixybar.defaults, params);
		}

		return this.each(function() {
			var sidebar  = {
				// Nodes
				$body 		: $('body'),
				$window 	: $(window),
				$sidebar 	: $(this),
				user_has_chosen : false,
				// Methods
				open 		: function() { this.$body.addClass(settings.class_wide); },
				close 		: function() { this.$body.removeClass(settings.class_wide); },
				toggle 		: function() { this.$body.toggleClass(settings.class_wide); },
				force_wide 	: function() {
					if(this.$window.width() > settings.width_force_wide) {
						if (!this.$body.hasClass(settings.class_wide) && !this.user_has_chosen) {
							sidebar.open();
						}
					} else {
						sidebar.close();
					}
				},
			};

			// Get the Railgun ready !
			if(action_type == 'init') {
				if(sidebar.$sidebar.data('is-initied') !== true) {
					sidebar.name = '{KHL-51D3B@2}';

					// Events
					// Events / Toggle sidebar
					sidebar.$body.on('click', settings.node_btn_toggler, function() {
						sidebar.user_has_chosen = true;
						sidebar.toggle();
					});
					sidebar.$sidebar.on('click', '> ._mask', function() {
						sidebar.close();
					});
					// Events / Resize
					sidebar.$window.on('resize', function() {
						sidebar.force_wide();
					});

					// -- Stop animation
					sidebar.$body.addClass(settings.class_no_anim);
					// Refresh
					sidebar.force_wide();
					// -- Relaunch animation
					setTimeout(function() {
						sidebar.$body.removeClass(settings.class_no_anim);
					}, 400);

					// Railgun set on fire !
					sidebar.$sidebar.data('is-initied', true);
				} else {
					console.warn(sidebar.name+' Already initied, you must define an action (ex: \'open\', \'close\', ...)');
				}
			// Use the Railgun, Snake !
			} else if(action_type == 'call') {
				if(sidebar.$sidebar.data('is-initied') === true) {
					// Call methods
					if(typeof sidebar[action] != 'undefined') {
						sidebar[action]();
					} else {
						console.warn('The action $.fixybar(\''+action+'\') doesn\'t exist, please try something else (ex: $.fixybar(\'open\')');
					}
				} else {
					console.warn('The sidebar isn\'t yep initied, you must call $.fixybar() plugin on this node');
				}
			}
		});
	};

	$.fn.fixybar.defaults = {
		node_sidebar 		: '.fixybar',
		node_btn_toggler 	: '.fixybar-btn-togglr',
		class_wide 			: 'fixybar--is-wide',
		class_no_anim 		: 'fixybar--no-anim',
		width_force_wide 	: 1000
	};
})(jQuery);
