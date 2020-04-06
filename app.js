function Person() {
    console.log(this);
    this.firstname = 'John';
    this.lastname = 'Doe';
}

// if function invoked with 'new' word - this pointed to Person object
var john = new Person();
console.log(john);
