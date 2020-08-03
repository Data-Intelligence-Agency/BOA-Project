//Constants/Variables
const userInput = document.getElementById("usernameInput");
const successUser = document.getElementById('usernameSucess');
const passInput = document.getElementById("passwordInput");
const charactersCount = document.getElementById("character");
const requiredCharacters = document.getElementById("reqChar");
const noRepeat = document.getElementById("noRepeat");
const specialChar = document.getElementById("specialChar");
const passwordCheck = document.getElementById("passwordSucess");
const conPassInput = document.getElementById("conPassInput");
const confirmedPass = document.getElementById('passwordConfirmed');
const emailInput = document.getElementById('email');
const securityQ = document.getElementById("securityquestion");
let formToSubmit = document.getElementById("form");
const lastNameInput = document.getElementById("lastName");
const firstNameInput = document.getElementById("firstName");
const approveName = document.getElementById("approveName");

//flags
let emailFlag = false;
let userFlag = false;
let PassFlag = false;
let conPassflag = false;
let FirstNameFlag = false;
let LastNameFlag = false;


//Storage
var login = []
var usernameStorage = {
    'albiona': 'dfdf'
}

//First and Last Name
firstNameInput.addEventListener("keyup", first_last);
lastNameInput.addEventListener("keyup", first_last);
function first_last() {
    approveName.style.display = "block"; 
    const regex_FL = /^[a-zA-Z]+$/;
    let f;
    if ((f = regex_FL.exec(firstNameInput)) !== null) {
        f.forEach((match, groupIndex) => {
            approveName.classList.add("greentxt");
            approveName.innerHTML = "Your name has been approved";
            approveName.classList.remove("redtxt");
            FirstNameFlag= true;
        });
    }
    let l;
    if ((l = regex_FL.exec(firstNameInput)) !== null) {
        l.forEach((match, groupIndex) => {
            approveName.classList.add("greentxt");
            approveName.innerHTML = "Your name has been approved";
            approveName.classList.remove("redtxt");
            FirstNameFlag= true;
        });
    }
    else {
        approveName.classList.remove("greentxt");
        approveName.innerHTML = "Your name hasn't been approved";
        approveName.classList.add("redtxt");
    }
    if (FirstNameFlag==true && LastNameFlag == true) {
        approveName.style.display = "block"; 
    }
}


//Function for email
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
        emailFlag = true;

    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "Please enter valid Email Address.";
        text.style.color = "#ff0000";
        emailFlag = false;
    }
}

//Function count characters in username
userInput.addEventListener('keyup', userCheck);
var username = ''
function userCheck(event) {
    username = userInput.value
    successUser.style.display = "block";
    console.log('thisIsTheUsername', username);
    //check for username length
    //successUser.classList.add("redtxt");
    if (username.length >= 8 && username.length <= 20) {
        successUser.classList.add("greentxt");
        successUser.innerHTML = "This username is available";
        successUser.classList.remove("redtxt");
        userFlag = true;
    }

    else {
        successUser.classList.add("redtxt");
        successUser.innerHTML = "This username is not available";
        successUser.classList.remove("greentxt");
        userFlag = false;
    }
    //check if username already in usernameStorage
    if (usernameStorage.hasOwnProperty(username)) {
        var usernameSucess = document.getElementById('usernameSucess');
        document.getElementById("usernameSucess").textContent = "";

    }
}

//Function for Password check 
passInput.addEventListener('keyup', passCheck);
function passCheck() {
    const password = passInput.value;
    //console.log(password)
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
        //console.log("Password Flag: ", PassFlag);
    }
}
//Password confirmed
conPassInput.addEventListener('keyup', conPassCheck);
function conPassCheck(event) {
    //console.log(conPassInput.value);
    confirmedPass.style.display = "block";
    if (passInput.value == conPassInput.value) {
        confirmedPass.classList.add("greentxt");
        confirmedPass.innerHTML = "The Password has been confirmed";
        confirmedPass.classList.remove("redtxt");
        confirmedPass.style.display = "none";
        conPassflag = true;
    }
    else {
        confirmedPass.classList.remove("greentxt");
        confirmedPass.innerHTML = "The Password has not been confirmed";
        confirmedPass.classList.add("redtxt");
        conPassflag = false;
        confirmedPass.style.display = "block";
    }
    //console.log("Comfirmed Password Flag: ", conPassflag );
}

        //  security  answer
const securityAnswer = document.getElementById('securityAnswer');
securityAnswer.addEventListener('keyUp'.securityAnswer.value);
const securityQuestion = document.getElementById('securityquestion');
securityQuestion.addEventListener('change' , function(){
    console.log('value for securityquestion',securityquestion.value)
})

    

//Event listener for submition 
formToSubmit.addEventListener("submit", scan);

console.log("First Name ", FirstNameFlag);
console.log("Last Name ", LastNameFlag);
console.log("Email ", emailFlag);
console.log("Username ", userFlag);
console.log("Password ", PassFlag);
console.log("Confrimed Password ", conPassflag);
let SubmitFlag = false;
function scan(event) {
    if (FirstNameFlag==true && LastNameFlag==true && emailFlag==true && userFlag==true && PassFlag == true && conPassflag == true) {
        SubmitFlag = true;
        register();
    }
    else {
        SubmitFlag = false;
        alert("Sorry, but thisform can not be submitted")
    }
}
//function to register user
function register() {
    var login = [];
    login.push({ FirstName: firstNameInput.value, lastName: lastNameInput.value, email: emailInput.value, username: userInput.value, password: passInput.value, });
    loginPage();
    //event.preventDefault();
}
//function to direct to login page
function loginPage() {
    window.open("document.location='index.html'", "_blank");
}
document.getElementById("Login").addEventListener("click", loginButton)
function loginButton() {
    window.open("document.location='index.html'");
}