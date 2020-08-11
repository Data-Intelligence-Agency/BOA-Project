var usernameInput = document.getElementById("username");
const passwordInput = document.getElementById('password');
var formToSubmit = document.getElementById("form");
const URL = 'http://127.0.0.1:5501/';

// username function
var username = document.getElementById("username").value;



formToSubmit.addEventListener("submit", run);

function run(event) {
    let auth = {username: usernameInput.value, password: passwordInput.value};
    console.log("In funtcion run", auth);
    event.preventDefault();
    axios.get('https://dsya-server.herokuapp.com/team3/login/', {
      auth: {
        username: usernameInput.value,
        password: passwordInput.value,
      }, 
    })
    .then(response => {
      console.log("This is the response", response);
      window.location.replace(`${URL}/website.html`);
    })
    .catch(error =>{
        console.log("This is the error", error);
        document.getElementById('login').style.display = "block";
    })
}
document.getElementById("Signup").addEventListener("click", signupButton)
function signupButton() {
    window.location.replace(`${URL}/signup.html`);
}

// //Password 
// const successDiv = document.getElementById('PasswordSuccess');



// passwordInput.addEventListener('keyup',passwordCheck);

// var password = ''
// function passwordCheck(event){
//     password=password+event.key
//     console.log('thisIsThePassword',password);
//     if(password.length >= 8){
//         successDiv.classList.add('show');


//     }
//  }
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("ul").style.top = "0";
//   } else {
//     document.getElementById("ul").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

