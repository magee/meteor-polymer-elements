Package.describe({
	summary: "Add Polymer-Elements to Meteor",
	version: "1.0.3",
	git: "http://github.com/magee/meteor-polymer-elements",
	name: 'magee:meteor-polymer-elements'
});

Npm.depends({
	bower: '1.3.10'
});

Package.onUse(function(api) {
	api.use('ecwyne:polymer@1.0.2');
	api.use('underscore');
	api.versionsFrom('METEOR@0.9.0');
	api.addFiles('polymer-elements.js', 'server');
});