Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
    console.log(prop + ": " + arr[prop]);
}

console.log("-- Use this - it's safer to loop though all the elements");
for (var i = 0; i <arr.length; i++) {
    console.log(i + ": " + arr[i]);
}