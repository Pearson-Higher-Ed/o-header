'use strict';

var fs = require('fs');

module.exports = {
	"options": {
		"js": "demos/src/demo.js",
		"sass": "demos/src/scss/demo.scss",
		"bodyClasses": "o-hoverable-on",
		"template": "main.mustache",
		"data": {
			"content": fs.readFileSync('demos/src/html/content.html')
		},
		"dependencies": [
			"o-dropdown-menu",
			"o-collapse"
		]
	},
	"demos": [
		{
			"name": "scaffold",
			"sass": "demos/src/scss/scaffold.scss",
			"data": {
				"o-header": {
					"head": fs.readFileSync('demos/src/html/scaffold/head.html'),
					"primary": fs.readFileSync('demos/src/html/scaffold/primary.html'),
					"user": fs.readFileSync('demos/src/html/scaffold/user.html')
				}
			}
		},
		{
			"name": "basic",
			"data": {
				"o-header": {
					"container": {
						"extra-classes": "demo-container"
					},
					"head": fs.readFileSync('demos/src/html/basic/head.html')
				}
			}
		}//,
		// {
		// 	"name": "responsive",
		// 	"data": {
		// 		"o-header": {
		// 			"container": {
		// 				"extra-classes": "demo-container"
		// 			},
		// 			"collapse": true,
		// 			"head": fs.readFileSync('demos/src/html/responsive/head.html'),
		// 			"primary": fs.readFileSync('demos/src/html/responsive/primary.html')
		// 		}
		// 	}
		// }
	]
};
