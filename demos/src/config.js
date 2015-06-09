module.exports = {
	"options": {
		"sass": "demos/src/scss/demo.scss",
		"bodyClasses": "o-hoverable-on",
		"template": "main.mustache",
		"data": {
			"content": require('fs').readFileSync('demos/src/html/content.html')
		}
	},
	"demos": [
		{
			"name": "scaffold",
			"sass": "demos/src/scss/scaffold.scss",
			"data": {
				"o-header": {
					"primary": {
						"left": require('fs').readFileSync('demos/src/html/scaffold/primary.left.html'),
						"right": require('fs').readFileSync('demos/src/html/scaffold/primary.right.html')
					}
				}
			}
		},
		{
			"name": "basic",
			"data": {
				"o-header": {
					"container": {
						"extra-classes": "demo__container"
					},
					"primary": {
						"left": "<div class=\"o-header__brand\"><div class=\"o-header__logo o-header__logo--pearson\"></div></div>",
						"right": "<div class=\"o-header__tagline o-header__tagline--always-learning pull-right\"></div>"
					}
				}
			}
		},
		{
			"name": "navigation",
			"data": {
				"o-header": {
					"container": {
						"extra-classes": "demo__container"
					},
					"primary": {
						"left": require('fs').readFileSync('demos/src/html/navigation/primary.left.html'),
						"right": require('fs').readFileSync('demos/src/html/navigation/primary.right.html')
					}
				}
			}
		}
	]
};
