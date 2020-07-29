const userInput = document.getElementById("usernameInput");
const passInput = document.getElementById("passwordInput");
const conPassInput = document.getElementById("conPassInput");
const emailInput = document.getElementById('email');
let securityQ = document.getElementById("securityquestion");
let formToSubmit = document.getElementById("form");
var login = []

// count characters in username
//const successUser = document.getElementById('usernameSucess');
//userInput.addEventListener('keyup', userCheck);
//var username = ''
//function userCheck(event) {
   // username = username + event.key
    //console.log('thisIsTheUsername', username);
    //if (username.length >= 8) {
        //successUser.classList.add("green");
       // successUser.classList.remove("red");
 //   }
//}
function validation(){
    var user = document.getElementById("usernameInput");
         if(user.value.length <= 20 && user.value.length >= 3){
         }
         else{
             alert("Username has to be between 3-20 characters.")
          }
         //duplication data list
         var user = document.getElementById("usernameInput");
         if(user.value == list.value){
         }
         else{
             alert("Username already exists.")
          }
}
//count characters in password
const charactersCount = document.getElementById("character");
const requiredCharacters = document.getElementById("reqChar");
const noRepeat = document.getElementById("noRepeat");
const specialChar = document.getElementById("specialChar");
const passwordCheck = document.getElementById("passwordSucess");

//passInput.addEventListener('keyup', passCheck);

function passCheck() {
    const password = passInput.value;
    console.log(password)
    passwordCheck.style.display = "block";
    //Character Count
    if (password.length >= 8 && password.length <= 20) {
        charactersCount.classList.add("green");
        charactersCount.classList.remove("red");
        return true;
    }
    else if (password.length >= 20) {
        charactersCount.classList.add("red");
        charactersCount.classList.remove("green");
        return false;
    }
    //Upper, Lowercased letters, & numbers
    const charregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;
    let m;
    if ((m = charregex.exec(password)) !== null) {
        m.forEach((match, groupIndex) => {
            requiredCharacters.classList.add("green");
            requiredCharacters.classList.remove("red");
        });
    }
    //No repeating characters 3 times or more
    const repeating = /(.)\1{2,}/;
    let o;
    if ((o = repeating.exec(password)) !== null) {
        o.forEach((match, groupIndex) => {
            noRepeat.classList.remove("green");
            noRepeat.classList.add("red");
        });
    }
    //No Spaces and Special Characters
    const charSpecial = /[@#()+{}\/?~;,*._-]/sg;
    let n;
    if ((n = charSpecial.exec(password)) !== null) {
        n.forEach((match, groupIndex) => {
            specialChar.classList.add("green");
            specialChar.classList.remove("red");
        });
    }
    const noSpace = /\s/; 
    let p;
    if ((p = noSpace.exec(password)) !== null) {
        p.forEach((match, groupIndex) => {
            specialChar.classList.remove("green");
            specialChar.classList.add("red");
        });
    }
}
//Password confirmed
const confirmedPass = document.getElementById('passwordConfirmed');
conPassInput.addEventListener('keyup', conPassCheck);
function conPassCheck(event) {
    console.log(conPassInput.value);
    if (passInput.value == conPassInput.value) {
        confirmedPass.classList.add("green");
        confirmedPass.classList.remove("red");
    }  
}
/*
    //  dOcument.getElementById('answer');
     const securityAnswer = document.getElementById('answer');
     if (!testInput(true,"Secret Question Answer (1st entry)",
            secretQuestionAnswerTF0.value.trim())){ 
        return true; 
    }
    // Input.addEventListener(click ,function);
    //  security question 

    // openmodal

    //for each drop down option
    // $('.dropdown-trigger').each(function () {
    //     //if clicked on an option
    //     $(this).click(function () {
    //         //add class modal - active
    //         // $('body').addclass('modal-active')
    //     // console.log(this)
    //     });

       
    // });

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