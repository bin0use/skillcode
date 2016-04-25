$(document).ready(function(){
console.log('passwordverification load ok');
//minimum 8 characters
var bad = /(?=.{8,}).*/;
//Alpha Numeric plus minimum 8
var good = /^(?=\S*?[a-z])(?=\S*?[0-9])\S{8,}$/;
//Must contain at least one upper case letter, one lower case letter and (one number OR one special char).
var better = /^(?=\S*?[A-Z])(?=\S*?[a-z])((?=\S*?[0-9])|(?=\S*?[^\w\*]))\S{8,}$/;
//Must contain at least one upper case letter, one lower case letter and (one number AND one special char).
var best = /^(?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9])(?=\S*?[^\w\*])\S{8,}$/;

$('#password').on('keyup', function () {
    var password = $(this);
    var pass = password.val();
    var passLabel = $('[for="password"]');
    var stength = 'Weak';
    var pclass = 'danger';
    if (best.test(pass) == true) {
        stength = 'Tres fort';
        pclass = 'success';
    } else if (better.test(pass) == true) {
        stength = 'Fort';
        pclass = 'warning';
    } else if (good.test(pass) == true) {
        stength = 'Assez fort';
        pclass = 'warning';
    } else if (bad.test(pass) == true) {
        stength = 'Faible';
    } else {
        stength = 'Trés faible';
    }

    var popover = password.attr('data-content', stength).data('bs.popover');
    popover.setContent();
    popover.$tip.addClass(popover.options.placement).removeClass('danger success info warning primary').addClass(pclass);

});

$('input[data-toggle="popover"]').popover({
    placement: 'top',
    trigger: 'focus'
});

$('.showpassword').hover(function () {
   $('#password').attr('type', 'text');
}, function () {
   $('#password').attr('type', 'password');
});
})

    function myFunction() {
var pass1 = document.getElementById("password").value;
var pass2 = document.getElementById("passwordconfirmation").value;
if (pass1 != pass2) {
    //alert("Passwords Do not match");
    document.getElementById("password").style.borderColor = "#E34234";
    document.getElementById("passwordconfirmation").style.borderColor = "#E34234";
}
else {
    alert("OK meme pass");
}
}
