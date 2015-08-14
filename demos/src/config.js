'use strict';

var fs = require('fs');

module.exports = {
	"options": {
		"js": "demos/src/demo.js",
		"sass": "demos/src/scss/demo.scss",
		"template": "main.mustache",
		"data": {
			"content": fs.readFileSync('demos/src/html/content.html')
		},
		"dependencies": [
			"o-dropdown-menu@0.5.0",
			"o-fonts@0.1.0"
		]
	},
	"demos": [
		{
			"name": "basic",
			"data": {
				"o-header": {
					"container": {
						"extra-classes": "demo-container"
					},
					"sections": fs.readFileSync('demos/src/html/basic-sections.html')
				}
			}
		},
		{
			"name": "nav",
			"data": {
				"o-header": {
					"sections": fs.readFileSync('demos/src/html/nav-sections.html')
				}
			}
		}
	]
};
