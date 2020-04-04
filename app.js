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


