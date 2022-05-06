document.querySelector('#women').addEventListener('click', gotoWomen);
function gotoWomen() {
    window.location.href = 'women.html';
}
document.querySelector('#men').addEventListener('click', gotoMen);
function gotoMen() {
    window.location.href = 'men.html';
}
document.querySelector('#girls').addEventListener('click', gotoGirls);
function gotoGirls() {
    window.location.href = 'girls.html';
}
document.querySelector('#boys').addEventListener('click', gotoBoys);
function gotoBoys() {
    window.location.href = 'boys.html';
}

document.querySelector('#fb').addEventListener('click', landFb);
function landFb() {
    window.location.href = 'https://www.facebook.com/maxfashions';
}

document.querySelector('#twitter').addEventListener('click', landTwitter);
function landTwitter() {
    window.location.href = 'https://twitter.com/maxfashionindia';
}

document.querySelector('#insta').addEventListener('click', landInstagram);
function landInstagram() {
    window.location.href = 'https://www.instagram.com/maxfashionindia/';
}

document.querySelector('#gotoOtp').addEventListener('click', checkOtp);
function checkOtp() {
    localStorage.setItem('mobileNumber', '+91' + document.querySelector('#mobileNumber').value);
    let mobileNumber = localStorage.getItem('mobileNumber');
    document.querySelector('#sentTo').innerText = mobileNumber;
    document.querySelector('#mobileNumber').value = null;
}

document.querySelector('#otpVerify').addEventListener('click', otpVerification);
let i = 0;
function otpVerification() {
    let otp = [document.querySelector('#otp1').value, document.querySelector('#otp2').value, document.querySelector('#otp3').value, document.querySelector('#otp4').value, document.querySelector('#otp5').value]
    if (i == 1) {
        return;
    } else if (otp.join("") == '21525') {
        document.querySelector('#wrongOtp').innerText = null
        document.querySelector('#otpVerify').setAttribute('data-bs-dismiss', 'modal');
        document.querySelector('#otpVerify').setAttribute('data-bs-target', '#linkAccount');
        $(document).ready(function () {
            document.querySelector('#otpVerify').click();
            i++;
        })
    } else {
        document.querySelector('#wrongOtp').innerText = `The OTP you have entered did'nt matched. Please try again`;
        document.querySelector('#otp1').value = null;
        document.querySelector('#otp2').value = null;
        document.querySelector('#otp3').value = null;
        document.querySelector('#otp4').value = null;
        document.querySelector('#otp5').value = null;
    }
}

let userName = JSON.parse(localStorage.getItem('userName'));
let j=0;
function setUsername() {
    let username = [];
    let fName = document.querySelector('#fname').value;
    let lName = document.querySelector('#lname').value;
    username.push(fName);
    username.push(lName);
    if(j == 1) {
        return;
    } else if(fName.length != 0 && lName.length != 0) {
        document.querySelector('#userName').setAttribute('data-bs-dismiss', 'modal');
        $(document).ready(function() {
            document.querySelector('#userName').click();
        })
        localStorage.setItem('userName', JSON.stringify(username));
        j++;
        window.location.reload();
    } else if(fName.length == 0 && lName.length == 0) {
        document.querySelector('#fname').setAttribute('placeholder', 'Please fill your first name');
        document.querySelector('#fname').style.color = 'red';
        document.querySelector('#lname').setAttribute('placeholder', 'Please fill your last name');
        document.querySelector('#lname').style.color = 'red';
    } else if (fName.length==0) {
        document.querySelector('#fname').setAttribute('placeholder', 'Please fill your first name');
        document.querySelector('#fname').style.color = 'red';
    } else if(lName.length == 0) {
        document.querySelector('#lname').setAttribute('placeholder', 'Please fill your last name');
        document.querySelector('#lname').style.color = 'red';
    }
}
document.querySelector('#userName').addEventListener('click', setUsername);

console.log('userName: ', userName);

document.querySelector('#user').innerHTML = "Hello " + userName[0];
