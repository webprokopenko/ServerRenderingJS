var mustache = require('mustache');
var template = '<h1>Holla s <i>{{name}}</i></h1>';
mustache.parse(template);
module.exports.sayHello = function(toWhom){
    return mustache.render(template, {name: toWhom});
};
