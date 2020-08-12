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
let formToSubmit = document.getElementById("form");
const lastNameInput = document.getElementById("lastName");
const firstNameInput = document.getElementById("firstName");
const approveName = document.getElementById("approveName");
const securityQuestion = document.getElementById('securityquestion');
const securityAnswer = document.getElementById('securityAnswer');
const conAnswer = document.getElementById("confirmedAnswer");
const URL = 'https://data-intelligence-agency.github.io/BOA-Project/';

//flags
let emailFlag = false;
let userFlag = false;
let PassFlag = false;
let conPassflag = false;
let FirstNameFlag = false;
let LastNameFlag = false;
let securityQFlag = false;
let SecurityAnswerFlag = false;


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
    if (firstNameInput.value.length >= 2 && lastNameInput.value.length >=2) {
        approveName.classList.add("greentxt");
        approveName.innerHTML = "Your name has been approved";
        approveName.classList.remove("redtxt");
        approveName.style.display = "none"; 
        FirstNameFlag= true;
        LastNameFlag = true;
    }
    else{
        approveName.style.display = "block"; 
        FirstNameFlag = false;
        LastNameFlag = false;
    }
}


//Function for email
emailAprroved = document.getElementById('emailAprroved');
emailInput.addEventListener('keyup', validation);
function validation() {
    // var form = document.getElementById('form');
    var email = document.getElementById('email').value;
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    console.log('email', email);
    console.log('pattern matched', pattern.test(email));

    if (pattern.test(email)) {
        // console.log('pattern matched');
        // text.innerHTML = "Your email adress is Valid.";
        // text.style.color = "#00ff00";
        // emailFlag = true;
        axios.get(`https://dsya-server.herokuapp.com/team3/checkemail/${email}`)
        .then(response => {
            console.log("This is the response for email ", response.data);
            if (response.data === "not found"){
                emailAprroved.classList.add("greentxt");
                emailAprroved.classList.remove("redtxt");
                emailAprroved.innerHTML = "This email is valid";
                // form.classList.add('valid');
                // form.classList.remove('invalid');
                emailFlag = true;
            }
            else {
                emailAprroved.classList.add("redtxt");
                emailAprroved.style.display= "block";
                emailAprroved.classList.remove("greentxt");
                emailAprroved.innerHTML = "This email is already being used";
                emailFlag = false;
                // form.classList.remove('valid');
                // form.classList.add('invalid');
            }
        })
        .catch(error => {
            console.log("This is the error for email ", error.body)
        })

    } else {
        // form.classList.remove('valid');
        // form.classList.add('invalid');
        emailAprroved.style.display= "block";
        emailAprroved.innerHTML = "Please enter valid Email Address.";
        emailAprroved.classList.add("redtxt");
        emailAprroved.classList.remove("greentxt");
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
        axios.get(`https://dsya-server.herokuapp.com/team3/checkusername/${username}`)
        .then(response => {
            console.log("This is the response for username ", response.data);
            if (response.data === "not found"){
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
        })
        .catch(error => {
            console.log("This is the error for username ", error.body)
        })

    }

    else {
        successUser.classList.add("redtxt");
        successUser.innerHTML = "This username is too short or too long.";
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
    // console.log(password)
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
    else {
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
    else  {
            requiredCharacters.classList.remove("green");
            requiredCharacters.classList.add("red");
            flag2 = true;
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
    else {
        noRepeat.classList.add("green");
        noRepeat.classList.remove("red");
        flag3=true;
    }
    //No Spaces and Special Characters
    const charSpecial = /[@#()+{}\/?~;,*._-]/sg;
    let n;
    const noSpace = /\s/;
    let p;
    if ((n = charSpecial.exec(password)) !== null) {
        n.forEach((match, groupIndex) => {
            specialChar.classList.add("green");
            specialChar.classList.remove("red");
            flag4 = true;
        });
        if ((p = noSpace.exec(password)) !== null) {
            p.forEach((match, groupIndex) => {
                specialChar.classList.remove("green");
                specialChar.classList.add("red");
                flag4 = false;
            });
        }
    }
    else {
        specialChar.classList.remove("green");
        specialChar.classList.add("red");
        flag4 = false;
    }


    if(flag1 == true && flag2 == true && flag3 == true && flag4 == true) {
        passwordCheck.style.display = "none";
        PassFlag = true;
        //console.log("Password Flag: ", PassFlag);
    }
    else {

        passwordCheck.style.display = "block";
        PassFlag =  false;
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
//Security Quextion
securityQuestion.addEventListener('change' , function(){
    console.log('value for securityquestion',securityquestion.value);
    if (securityAnswer.value.length >= 1) {
        securityQFlag= true;
    }
    else{
        securityQFlag= false;
    }
    
})
 //  security  answer
securityAnswer.addEventListener('keyup', answer);
function answer() {
    
    if (securityAnswer.value.length >= 2) {
        conAnswer.style.display = "none";
        SecurityAnswerFlag = true;
        console.log(securityAnswer.value);
    }
    else{
        conAnswer.style.display = "block";
        SecurityAnswerFlag = false;
    }

}


    

//Event listener for submition 
formToSubmit.addEventListener("submit", scan);


let SubmitFlag = false;
function scan(event) {
    event.preventDefault();
    console.log("First Name ", FirstNameFlag);
    console.log("Last Name ", LastNameFlag);
    console.log("Email ", emailFlag);
    console.log("Username ", userFlag);
    console.log("Password ", PassFlag);
    console.log("Confrimed Password ", conPassflag);
    console.log("Security Question",securityQFlag);
    console.log("Security Answer", SecurityAnswerFlag);
    if (FirstNameFlag==true && LastNameFlag==true && emailFlag==true && userFlag==true && PassFlag == true && conPassflag == true && 
        securityQFlag == true && SecurityAnswerFlag == true) {
        SubmitFlag = true;
        register();
    }
    else {
        SubmitFlag = false;
        document.getElementById('cantLogin').style.display = 'block';
        //alert("Sorry, but this form can not be submitted")
    }
}
//function to register user
function register() {

    var user = {FirstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value, 
        username: userInput.value, 
        password: passInput.value, 
        secretquestion: securityQuestion.value, 
        secretanswer: securityAnswer.value };
        //console.log('This is the user', user)
    return axios.post('https://dsya-server.herokuapp.com/team3/createuser/', user) 
        .then(response => {
            loginPage();
            console.log('Response ', response.data)
            

        })
        .catch(error => {
            console.error("Error from create user", error.response.data)
        })
    
    //console.log("This is the registered user", user);
}
//function to direct to login page
function loginPage() {
    window.location.replace(`${URL}index.html`);
}
document.getElementById("Login").addEventListener("click", loginButton)
function loginButton() {
    window.location.replace(`${URL}index.html`);
}