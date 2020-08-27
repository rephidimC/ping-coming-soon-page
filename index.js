function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

var button = document.querySelector("button");


function validate() {
  var correct = document.querySelector(".correct");
  var incorrect = document.querySelector(".incorrect");
  var empty = document.querySelector(".empty");
  var email = document.querySelector("input").value;
  var input = document.querySelector("input");


  if (validateEmail(email)) {
    correct.style.display = "block";
    empty.style.display = "none";
    incorrect.style.display = "none";
    input.style.borderColor = "hsl(0, 0%, 59%)";


  } else if (email == "") {
    empty.style.display = "block";
    correct.style.display = "none";
    incorrect.style.display = "none";
    input.style.borderColor = "red";

  } else {
    incorrect.style.display = "block";
    correct.style.display = "none";
    empty.style.display = "none";
    input.style.borderColor = "red";
  }
  return false;
}

button.addEventListener("click", validate);



//   var $correct = $(".correct");
//   var $incorrect = $(".incorrect");
//   var $empty = $(".empty");
//   var email = $("input").val();
//
//   if (validateEmail(email)) {
//     $correct.show();
//     $empty.hide();
//     $incorrect.hide();
//   } else if (email == "") {
//     $empty.show();
//     $correct.hide();
//     $incorrect.hide();
//   } else {
//     $incorrect.show();
//     $correct.hide();
//     $empty.hide();
//   }
//   return false;
// }
//
// $("button").on("click", validate);




// <p class="error incorrect">Please provide a valid email address</p>
