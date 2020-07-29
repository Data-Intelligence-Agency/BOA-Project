const userInput = document.getElementById("usernameInput");
const passInput = document.getElementById("passwordInput");
const conPassInput = document.getElementById("conPassInput");
const emailInput = document.getElementById('email');
let securityQ = document.getElementById("securityquestion");
let formToSubmit = document.getElementById("form");
var login = []

var usernameStorage = {
    'albiona': 'dfdf'
}


//count characters in username
//get id of a div
const successUser = document.getElementById('usernameSucess');
userInput.addEventListener('keyup', userCheck);

var username = ''
function userCheck(event) {
    username = userInput.value
    console.log('thisIsTheUsername', username);
    //check for username length
    successUser.classList.add("redtxt");
    if (username.length >= 8) {
        successUser.classList.add("redtxt");
        successUser.value = "This username is available.";
        successUser.classList.remove("redtxt");
    }
    //check if username already in usernameStorage
    if (usernameStorage.hasOwnProperty(username)) {
        var usernameSucess = document.getElementById('usernameSucess');
        document.getElementById("usernameSucess").textContent = "";

    }
}
//count characters in password
const charactersCount = document.getElementById("character");
const requiredCharacters = document.getElementById("reqChar");
const noRepeat = document.getElementById("noRepeat");
const specialChar = document.getElementById("specialChar");
const passwordCheck = document.getElementById("passwordSucess");

//passInput.addEventListener('keyup', passCheck);
let PassFlag = false;
function passCheck() {
    const password = passInput.value;
    console.log(password)
    passwordCheck.style.display = "block";
    let flag1 = false;
    let flag2 = false;
    let flag3 = true;
    let flag4 = false;
    //Character Count
    if (password.length >= 8 && password.length <= 20) {
        charactersCount.classList.add("green");
        charactersCount.classList.remove("red");
        flag1 = true;
    }
    else if (password.length >= 20) {
        charactersCount.classList.add("red");
        charactersCount.classList.remove("green");
        flag1 = false;
    }
    //Upper, Lowercased letters, & numbers
    const charregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$/;
    let m;
    if ((m = charregex.exec(password)) !== null) {
        m.forEach((match, groupIndex) => {
            requiredCharacters.classList.add("green");
            requiredCharacters.classList.remove("red");
            flag2 = true;
        });
    }
    //No repeating characters 3 times or more
    const repeating = /(.)\1{2,}/;
    let o;
    if ((o = repeating.exec(password)) !== null) {
        o.forEach((match, groupIndex) => {
            noRepeat.classList.remove("green");
            noRepeat.classList.add("red");
            flag3=false;
        });
    }
    //No Spaces and Special Characters
    const charSpecial = /[@#()+{}\/?~;,*._-]/sg;
    let n;
    if ((n = charSpecial.exec(password)) !== null) {
        n.forEach((match, groupIndex) => {
            specialChar.classList.add("green");
            specialChar.classList.remove("red");
            flag4 = true;
        });
    }
    const noSpace = /\s/;
    let p;
    if ((p = noSpace.exec(password)) !== null) {
        p.forEach((match, groupIndex) => {
            specialChar.classList.remove("green");
            specialChar.classList.add("red");
            flag4 = false;
        });
    }
    if(flag1 == true && flag2 == true && flag3 == true && flag4 == true) {
        passwordCheck.style.display = "none";
        PassFlag = true;
        console.log(PassFlag);
    }
}
//Password confirmed
let conPassflag = false;
const confirmedPass = document.getElementById('passwordConfirmed');
conPassInput.addEventListener('keyup', conPassCheck);
function conPassCheck(event) {
    console.log(conPassInput.value);
    if (passInput.value == conPassInput.value) {
        confirmedPass.classList.add("greentxt");
        confirmedPass.value = "The Password has been confirmed";
        confirmedPass.classList.remove("redtxt");
        conPassflag = true;
    }
    else  {
        confirmedPass.classList.remove("greentxt");
        confirmedPass.value = "The Password has not been confirmed";
        confirmedPass.classList.add("redtxt");
        conPassflag = false
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
    */

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
//Event listener for submition 
formToSubmit.addEventListener("submit", scan);

function scan(event) {
    console.log(userInput.value);
    console.log(passInput.value);
    register();
}

//function to register user
function register() {
    var login = [];
    login.push({ FirstName: firstNameInput.value, lastName: lastNameInput.value, email: emailInput.value, username: userInput.value, password: passInput.value });
    event.preventDefault();
}

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