# ServerRenderingJS
## Begins in Webpack
1) npm install webpack -g
2) sayHello.js
```javascript
var mustache = require('mustache');
var template = '<h1>Holla s <i>{{name}}</i></h1>';
mustache.parse(template);
module.exports.sayHello = function(toWhom){
    return mustache.render(template, {name: toWhom});
};
```
3) main.js
```javascript
window.addEventListener('load', function(){
   var sayHello = require('./sayHello').sayHello;
   var hello = sayHello('Browser!');
   var body = document.getElementsByTagName('body')[0];
   body.innerHTML = hello;
});
```
4) npm install mustache
5) webpack main.js bundle.js
5) magic.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Webpack magic</title>
    <script src="bundle.js"></script>
</head>
<body>
</body>
</html>
```



