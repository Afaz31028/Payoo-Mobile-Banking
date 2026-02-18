const myNumber = document.getElementById('mobile-number');
const myPin = document.getElementById('pin-number');

document.getElementById('login-btn').addEventListener('click', function () {
    if (myNumber.value === '01631876671' && myPin.value === '1$90') {
        alert("Login Successfully");
        window.location.assign('/home.html');
    }
    else{
        alert("Login Failed")
    }
})