var g = G$('John', 'Doe');
g.greet()
    .setLang('es')
    .greet(true)
    .log();

$('#login').on('click',() => {
    var loginGrtr = G$('John', 'Doe');
    $('#logindiv').hide();
    loginGrtr
        .setLang($('#lang').val())
        .HTMLGreeting('#greeting', true)
        .log();
});