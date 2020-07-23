const userInput = document.getElementById("usernameInput");
const passInput = document.getElementById("passwordInput");
const conPassInput = document.getElementById("conPassInput");
const emailInput = document.getElementById('email');
let securityQ = document.getElementById("securityquestion");
let formToSubmit = document.getElementById("form");
var login = []

// count characters in username
const successUser = document.getElementById('usernameSucess');
userInput.addEventListener('keyup', userCheck);
var username = ''
function userCheck(event) {
    username = username + event.key
    console.log('thisIsTheUsername', username);
    if (username.length >= 8) {
        successUser.classList.add("green");
        successUser.classList.remove("red");
    }
}
//count characters in password
const charactersCount = document.getElementById("character");
const requiredCharacters = document.getElementById("reqChar");
const noRepeat = document.getElementById("noRepeat");
const specialChar = document.getElementById("specialChar");
const passwordCheck = document.getElementById("passwordSucess");
passInput.addEventListener('keyup', passCheck);
var password = ''
function passCheck(event) {
    passwordCheck.style.display = "block";
    password = password + event.key
    console.log('thisIsThePassword', password);
    if (password.length >= 8 && password.length <= 20) {
        charactersCount.classList.add("green");
        charactersCount.classList.remove("red");
        //alert("pass");
        return true;
    }
    else if (password.length >= 20) {
        charactersCount.classList.add("red");
        charactersCount.classList.remove("green");
        return false;
    }
    var passw = /^[A - Za - z]\w{ 7, 14}$/;
    if (password.match(passw)) {
        requiredCharacters.classList.add("green");
        requiredCharacters.classList.remove("red");
        return true;
    }
    var charSpecial = /^(?=.*\d)(?!.*\s).$/;
    if (password.match(charSpecial)) {
        requiredCharacters.classList.add("green");
        requiredCharacters.classList.remove("red");
        return true;
    }
}
//Password confirmed
const confirmedPass = document.getElementById('passwordConfirmed');
conPassInput.addEventListener('keyup', passCheck);
var comPass = ''
function conPassCheck(event) {
    conPass = conPass + event.key
    console.log('thisIsTheConfrimedPassword', conPass);
    if (conPass.value == conPass.value) {
        confirmedPass.classList.add("green");
        confirmedPass.classList.remove("red");
        //alert("pass");
    }

    //  security question 

    // openmodal
    $('.dropdown-trigger').each(function () {
        $(this).click(function () {
            $('body').addclass('modal-active')

        });


    });

    //close





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
function CheckPassword(inputtxt) 
{ 
var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
if(inputtxt.value.match(decimal)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}
*/
emailInput.addEventListener('keyup', validation);
function validation() {
    var form = document.getElementById('form');
    var email = document.getElementById('email').value;
    var text = document.getElementById('text');
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    console.log('email', email);
    console.log('pattern matched', pattern.test(email));

    if (pattern.test(email)) {
        console.log('pattern matched');
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML = "Your email adress is Valid.";
        text.style.color = "#00ff00";

    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "Please enter valid Email Address.";
        text.style.color = "#ff0000";
    }
}