//var username = document.getElementById("username");
var password = document.getElementById("password");
var formToSubmit = document.getElementById("form");

// username function
var username = document.getElementById("username").value;



formToSubmit.addEventListener("submit", run);

function run(event) {
    console.log(username)
    var login = [];
    login.push({user: username.value, pass: password.value});
    console.log(login);
    event.preventDefault();
}


//Password 
const successDiv = document.getElementById('PasswordSuccess');


const passwordInput = document.getElementById('password');
passwordInput.addEventListener('keyup',passwordCheck);

var password = ''
function passwordCheck(event){
    password=password+event.key
    console.log('thisIsThePassword',password);
    if(password.length >= 8){
        successDiv.classList.add('show');


    }
}
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("ul").style.top = "0";
  } else {
    document.getElementById("ul").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
