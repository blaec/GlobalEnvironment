(function (global, $) {
    var Greetr = function (firstname, lastname, language) {
        return new Greetr.init(firstname, lastname, language);
    };

    Greetr.prototype = {};

    Greetr.init = function (firstname, lastname, language) {
        var self = this;
        self.firsname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
    };

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

    // return Greetr;

}(window, jQuery));