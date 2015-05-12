module.exports = {
  "options": {
    "sass": "demos/src/demo.scss",
    "bodyClasses": "o-hoverable-on",
    "template": "main.mustache",
    "data": {
      "content": require('fs').readFileSync('demos/src/html/content.html')
    }
  },
  "demos": [
   {
      "name": "scaffold",
      "data": {
        "o-he-header": {
          "primary": {
            "left": "LEFT CONTENT",
            "right": "RIGHT CONTENT"
          }
        }
      }
    },
    {
      "name": "basic",
      "data": {
        "o-he-header": {
          "primary": {
            "left": "<div class=\"o-he-header__logo o-he-header__logo--pearson\"></div>",
            "right": "<div class=\"o-he-header__tagline o-he-header__tagline--always-learning\"><span>Always Learning</span></div>"
          }
        }
      }
    },
    {
      "name": "navigation",
      "data": {
        "o-he-header": {
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
