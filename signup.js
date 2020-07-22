const userInput = document.getElementById("usernameInput");
const passInput = document.getElementById("passwordInput");
const conPassInput = document.getElementById("conPassInput");
let securityQ = document.getElementById("securityquestion");
let formToSubmit = document.getElementById("form");
var login = []

// count characters in username
const successUser = document.getElementById('usernameSucess');
userInput.addEventListener('keyup',userCheck);
var username = ''
function userCheck(event){
    username=username+event.key
    console.log('thisIsTheUsername',username);
    if(username.length >= 8 ) {
        successUser.classList.add("green");
        successUser.classList.remove("red");
    }
}
//count characters in password
const successPass = document.getElementById('passwordSucess');
passInput.addEventListener('keyup',passCheck);
var password = ''
function passCheck(event){
    password=password+event.key
    console.log('thisIsTheUsername',password);
    if(password.length >= 8 ) {
        successPass.classList.add("green");
        successPass.classList.remove("red");
        //alert("pass");
    }
}
//Password confirmed
const confirmedPass = document.getElementById('passwordConfirmed');
conPassInput.addEventListener('keyup',passCheck);
var comPass = ''
function conPassCheck(event){
    conPass=conPass+event.key
    console.log('thisIsTheConfrimedPassword',conPass);
    if(conPass.value == conPass.value ) {
        confirmedPass.classList.add("green");
        confirmedPass.classList.remove("red");
        //alert("pass");
    }
}
//Event listener for submition 
formToSubmit.addEventListener("submit", scan);

function scan(event) {
    console.log(username.value);
    console.log(securityQ.value);
}

//function to register user
/*function register() {
    var login = [];
    login.push({Firstname: firstname.value, userInput: userInput.value, pass: password.value});
    event.preventDefault();
}
*/
