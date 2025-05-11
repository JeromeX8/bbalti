var baltisimg = ["image/balti_01.png", "image/balti_02.png", "image/balti_03.png"];
var currentbalti = 0;
var votes = [0, 0, 0];

function incrementBalti() {
  currentbalti = (currentbalti + 1) % baltisimg.length;
  $('#baltiimg').attr('src', baltisimg[currentbalti]);
  $('#votes').text(votes[currentbalti]);
}

function vote() {
  votes[currentbalti]++;
  $('#votes').text(votes[currentbalti]);
  window.location.href = "thank.html";
}

$(document).ready(function () {
  var emailValid = false;
  var passwordValid = false;
  var usernameValid = false;

  var $regForm = $("#regform");
  var $email = $("#regemail");
  var $password = $("#regpassword");
  var $username = $("#regusername");

  var $success = $("#success");
  var $error = $("#error");
  var $submit = $("#regbtn");

  function emailFormat(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }

  function errorDisplay(msg) {
    $success.hide();
    $error.html(msg).removeClass("nodisplay").show();
  }

  function successDisplay(msg) {
    $error.hide();
    $success.html(msg).removeClass("nodisplay").show();
  }

  function emailCheck() {
    var val = $email.val().trim();
    if (!emailFormat(val)) {
      errorDisplay("Invalid email address");
      emailValid = false;
    } else {
      successDisplay("Email valid");
      emailValid = true;
    }
    submit();
  }

  function passwordCheck() {
    if ($password.val().trim() === "") {
      errorDisplay("You need a password");
      passwordValid = false;
    } else {
      successDisplay("Password valid");
      passwordValid = true;
    }
    submit();
  }

  function usernameCheck() {
    if ($username.val().trim() === "") {
      errorDisplay("You need a username");
      usernameValid = false;
    } else {
      successDisplay("Username valid");
      usernameValid = true;
    }
    submit();
  }

  function submit() {
    $submit.prop("disabled", !(emailValid && passwordValid && usernameValid));
  }

  $email.on("input", emailCheck);
  $password.on("input", passwordCheck);
  $username.on("input", usernameCheck);

  $regForm.submit(function (event) {
    event.preventDefault();
    if (emailValid && passwordValid && usernameValid) {
      successDisplay("Registration successful. One moment please.");
      $("#regform")[0].reset();
      $submit.prop("disabled", true);

      setTimeout(function () {
        window.location.href = "login.html";
      }, 2500);

    } else {
      errorDisplay("Invalid details");
    }
    return false;

  });

  var $loginUsername = $("#lgnusername");
  var $loginPassword = $("#lgnpassword");

  function loginErrorDisplay(msg) {
    $success.hide();
    $error.html(msg).removeClass("nodisplay").show();
  }

  function loginSuccessDisplay(msg) {
    $error.hide();
    $success.html(msg).removeClass("nodisplay").show();
  }

  window.loginValidate = function () {
    var user = $loginUsername.val().trim();
    var pass = $loginPassword.val().trim();

    if (user === "" || pass === "") {

      loginErrorDisplay("Username and password are required");
      return false;

    }
    loginSuccessDisplay("Login successful. One moment please");
    setTimeout(function () {
      window.location.href = "BaltiShowdown.html";
    }, 2500);


    return false;



  };




});


