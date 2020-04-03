var firstname = 'John';

(function (name) {
    var greeting = 'Inside IIFE: Hello';
    console.log(greeting + ' ' + name);
}(firstname));      // IIFE