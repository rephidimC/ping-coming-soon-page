function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result = $(".result");
  var email = $("input").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " is valid :)");
    $result.css("color", "green");
  } else if (email == "") {
    $result.text("Whoops! It looks like you forgot to add your email!");
  } else {
    $result.text("Please provide a valid email address!");
  }
  return false;
}

$("button").on("click", validate);



  // <p class="error incorrect">Please provide a valid email address</p>
