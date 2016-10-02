/*This part of code is used for Navbar and Sign Area*/
var login_form = $('#login_form');
var register_form = $('#register_form');
var forget_form = $('#forget_form');
var modal_form = $('#modal_form');
var form_header = $('#form_header')

function formChange(oldForm, newForm) {//Used for Login Area in index page
    var oldH = oldForm.offsetHeight; //oldForm.height(); Use offsetHeight because height() don't include padding and boader
    var newH = newForm.offsetHeight; //newForm.height();
    oldForm.fadeToggle(500, function() {
        modal_form.animate({
            height: newH
        }, 500, function() {
            newForm.fadeToggle(500);
        });
    });
}

document.getElementById('login_lost_btn').addEventListener("click", function() {
    form_header.fadeOut(100, function() {
        $(this).text("Forget Password").fadeIn(500);
    });
    formChange(login_form, forget_form);
});
document.getElementById('login_register_btn').addEventListener("click", function() {
    form_header.fadeOut(100, function() {
        $(this).text("Register").fadeIn(500);
    });
    formChange(login_form, register_form);
});
document.getElementById('register_sign_btn').addEventListener("click", function() {
    form_header.fadeOut(100, function() {
        $(this).text("Sign In").fadeIn(500);
    });
    formChange(register_form, login_form);
});
document.getElementById('register_lost_btn').addEventListener("click", function() {
    form_header.fadeOut(100, function() {
        $(this).text("Forget Password").fadeIn(500);
    });
    formChange(register_form, forget_form);
});
document.getElementById('forget_sign_btn').addEventListener("click", function() {
    form_header.fadeOut(100, function() {
        $(this).text("Sign In").fadeIn(500);
    });
    formChange(forget_form, login_form);
});
document.getElementById('forget_register_btn').addEventListener("click", function() {
    form_header.fadeOut(100, function() {
        $(this).text("Register").fadeIn(500);
    });
    formChange(forget_form, register_form);
});

document.getElementById('login_btn').addEventListener('click', function() {
    login_form[0].style.display = "block";
    forget_form[0].style.display = "none";
    register_form[0].style.display = "none";
    form_header[0].innerHTML = "Sign In";
});
