console.log(this);      // global window

function a() {
    console.log(this);  // global window
    this.newvariable = 'hello';
}

function b() {
    console.log(this);  // global window
}

a();

console.log(newvariable);

b();

var c = {
    name: 'The c object',
    log: function () {
        var self = this;

        // this.name = 'Updated c object';
        self.name = 'Updated c object';
        // console.log(this);
        console.log(self);

        var setname = function (newname) {
            // this.name = newname;
            self.name = newname;
            // console.log(this);
        };
        setname('Updated again! The c object');
        // console.log(this);
        console.log(self);
    }
};

c.log();