function greet(whattosay) {
    return function (name) {
        console.log(whattosay + ' ' + name);
    };
}

greet('Hi')('Tony');

var sayHi = greet('Hi');
sayHi('Tony');

console.log('-- end part 1 ---');

function buildFunctions() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            function () {
                console.log(i);
            }
        )
    }

    return arr;
}

var fs = buildFunctions();

fs[0]();
fs[1]();
fs[2]();

console.log('-- end part 2.1 ---');

function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        let j = i;
        arr.push(
            function () {
                console.log(j);
            }
        )
    }

    return arr;
}

var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

console.log('-- end part 2.2 [es6]---');

function buildFunctions3() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) {
                console.log(j);
            }(i))
        )
    }

    return arr;
}

var fs3 = buildFunctions3();

fs3[0];
fs3[1];
fs3[2];

console.log('-- end part 2.3 [es5]---');