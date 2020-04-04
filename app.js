var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function () {
        var fullName = this.firstname + ' ' + this.lastname;
        return fullName;
    }
};

var logName = function (lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('---------------------------------');
};

console.log('bind() sample');
var logPersonName = logName.bind(person);
logPersonName('en');

console.log('call() sample');
logName.call(person, 'en', 'es');

console.log('apply() sample');
logName.apply(person, ['en', 'es']);


// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
};

console.log(person.getFullName.apply(person2));

// function curring
function multiple(a, b) {
    return a * b;
}
var multipleByTwo = multiple.bind(this, 2);
// function multipleByTwo(b) {
//     var a = 2;
//     return a * b;
// }
var multipleByThree = multiple.bind(this, 3);
console.log(multipleByTwo(4));
console.log(multipleByThree(4));