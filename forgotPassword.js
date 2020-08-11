const passInput = document.getElementById("passwordInput");
const charactersCount = document.getElementById("character");
const requiredCharacters = document.getElementById("reqChar");
const noRepeat = document.getElementById("noRepeat");
const specialChar = document.getElementById("specialChar");
const passwordCheck = document.getElementById("passwordSucess");
const conPassInput = document.getElementById("conPassInput");
const confirmedPass = document.getElementById('passwordConfirmed');
const userInput = document.getElementById("usernameInput");
const successUser = document.getElementById('usernameSucess');
const securityAnswer = document.getElementById('securityAnswer');
const conAnswer = document.getElementById("confirmedAnswer");
const updatePassword = document.getElementById('updatePassword');
const URL = 'http://127.0.0.1:5501/';
let objectID;

//flags
let PassFlag = false;
let conPassflag = false;
let userFlag = false;



//Usename Check
document.getElementById('buttonMe').addEventListener('click', userCheck);
var username = '';
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
                successUser.classList.add("redtxt");
                successUser.innerHTML = "This username was not found";
                successUser.classList.remove("greentxt");
                document.getElementById('displaySecurity').style.display = 'none';
                //document.getElementById('submit').style.display = 'none';
                userFlag = false;
            }
            else {
                successUser.classList.add("greentxt");
                successUser.innerHTML = "This username was found";
                successUser.classList.remove("redtxt");
                userFlag = true;
                document.getElementById('displaySecurity').style.display = 'block';
                document.getElementById('enterUsername').style.display = 'none';
                axios.get(`https://dsya-server.herokuapp.com/team3/secretquestion/${username}`)
                .then(response => {
                    document.getElementById('security').innerHTML = response.data;
                })
                .catch(error => {
                    console.log('This is the error for Security Q', error)
                })
            }
        })
        .catch(error => {
            console.log("This is the error for username ", error.body)
        })

    }
}


// /team3/secretquestion/username
// '/team3/checkanswer/' {username: username, secret answer: answer}
// '/team3/changepassword/' send body{ id: id received on previous request, password: “new password”}
//securityQuestion
document.getElementById('submit').addEventListener('click', answer);
function answer() {
    
    if (securityAnswer.value.length >= 2) {
        // conAnswer.style.display = "none";
        // SecurityAnswerFlag = true;
        // //console.log(securityAnswer.value);
        axios.put(`https://dsya-server.herokuapp.com/team3/checkanswer/`, {username: userInput.value, answer: securityAnswer.value})
        .then(response=> {
            console.log("This is the reponse for answer", response.data);
            objectID = response.data;
            if (response.data === "Incorrect Answer"){
                conAnswer.style.display = "block";
                conAnswer.innerHTML = "Incorrect Answer";
                document.getElementById('pwd').style.display = 'none';
                document.getElementById('displaySecurity').style.display = 'block';

            }
            else {
                document.getElementById('pwd').style.display = 'block';
                conAnswer.style.display = "none";
                document.getElementById('displaySecurity').style.display = 'none';
            }
        })
        .catch(error =>{
            console.log('This is the error for answer', error);
            conAnswer.style.display = "block";
            conAnswer.innerHTML = "Incorrect Answer";
            document.getElementById('pwd').style.display = 'none';
            document.getElementById('displaySecurity').style.display = 'block';
        })
    }
    else{
        conAnswer.style.display = "block";
        conAnswer.innerHTML = "Too short";
        SecurityAnswerFlag = false;
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

updatePassword.addEventListener('click', updatePasswordfunction)
function updatePasswordfunction() {
    console.log('This is updatePasswordfuction')
    if (PassFlag == true && conPassflag == true ){
        axios.put(`https://dsya-server.herokuapp.com/team3/changepassword/`, {id: objectID, password: passInput.value})
        .then(response => {
            console.log("This is response from password", response.data)
            window.location.replace(`${URL}/index.html`);
        })
        .catch(error => {
            console.log('This is error from Password', error)
        })
    }


}