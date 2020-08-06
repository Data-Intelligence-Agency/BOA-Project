const passInput = document.getElementById("passwordInput");
const confirmedPass = document.getElementById('passwordConfirmed');
const conPassInput = document.getElementById("conPassInput");


//flags
let PassFlag = false;
let conPassflag = false;


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