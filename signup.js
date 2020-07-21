const userInput = document.getElementById("usernameInput");
let securityQ = document.getElementById("securityquestion");
let formToSubmit = document.getElementById("form");

const successUser = document.getElementById('UsernameSuccess');
userInput.addEventListener('keyup',userCheck);
var username = ''
function userCheck(event){
    username=username+event.key
    console.log('thisIsTheUsername',username);
    if(username.length >= 8 && username.length <= 20){
        successUser.classList.add("show");
    }
}

formToSubmit.addEventListener("submit", scan);

function scan(event) {
    console.log(username.value);
    console.log(securityQ.value);
}

/*function register() {
    var login = [];
    login.push({Firstname: firstname.value, userInput: userInput.value, pass: password.value});
    event.preventDefault();
}
*/
