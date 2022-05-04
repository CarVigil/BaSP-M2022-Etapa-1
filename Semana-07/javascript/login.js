var email = document.getElementById('email');
var pass = document.getElementById('password');
var errorEmail = document.getElementById('error-email');
var errorPass = document.getElementById('error-pass');
var requiredEmail = document.getElementById('required-email');
var requiredPass = document.getElementById('required-pass');
var re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var alphabetic = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
function validateEmail() {
    if (email.value === '') {
        requiredEmail.style.display = 'block';
        document.getElementById('email').classList.add('error');
        return false;
    } else if (!re.test(email.value)) {
        errorEmail.style.display = 'block';
        document.getElementById('email').classList.add('error');
        return false;
    } else {
        document.getElementById('email').classList.add('valid');
        return true;
    }
}
function validatePass() {
    var cont = 0;
    var letters = 0;
    var numbers = 0;
    var passLength = pass.value.length;
    for (var i = 0; i < passLength; i++) {
        if (!alphabetic.includes(pass.value[i]) && !numeric.includes(pass.value[i])) {
            cont++;
        }
        if (alphabetic.includes(pass.value[i])) {
            letters++;
        }
        if (numeric.includes(pass.value[i])) {
            numbers++;
        }
    }
    if (pass.value === '') {
        requiredPass.style.display = 'block';
        document.getElementById('password').classList.add('error');
        return false;
    } else if (passLength < 8 || cont != 0 || letters == 0 || numbers == 0) {
        errorPass.style.display = 'block';
        document.getElementById('password').classList.add('error');
        return false;
    } else {
        document.getElementById('password').classList.add('valid');
        return true;
    }
}
function fixingError() {
    errorEmail.style.display = 'none';
    requiredEmail.style.display = 'none';
}
function fixingErrorPass() {
    errorPass.style.display = 'none';
    requiredPass.style.display = 'none';
}
email.addEventListener('blur', validateEmail);
pass.addEventListener('blur', validatePass);
email.addEventListener('focus', fixingError);
pass.addEventListener('focus', fixingErrorPass);
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateEmail() && validatePass()) {
        fetch(`https://basp-m2022-api-rest-server.herokuapp.com/login?email=${email.value}&password=${pass.value}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById('modal').style.display = 'block';
                document.getElementById('close').onclick = function () {
                    document.getElementById('modal').style.display = 'none';
                }
                document.getElementById('message').innerHTML = '<h3>Request successful</h3>';
                if (data.success) {
                    document.getElementById('message').innerHTML += '<p class="success"><i class="fa-solid fa-check"></i> ' + data.msg + '</p>';
                } else {
                    document.getElementById('message').innerHTML += '<p class="invalid"><i class="fa-solid fa-xmark"></i> ' + data.msg + '</p>';
                }
                document.getElementById('message').classList.add('message');
                document.getElementById('message').innerHTML += '<p>Email: ' + email.value + '</p><p>' + 'Password: ' + pass.value + '</p>';
            })
            .catch(function (error) {
                alert("There was an error " + error);
            });
    } else {
        document.getElementById('modal').style.display = 'block';
        document.getElementById('close').onclick = function () {
            document.getElementById('modal').style.display = 'none';
        }
        document.getElementById('message').classList.add('message');
        document.getElementById('message').innerHTML = '<p class="invalid"><i class="fa-solid fa-xmark"></i> Error</p>';
        if (!validateEmail()) {
            document.getElementById('message').innerHTML += '<p>The email is not valid</p>';
        }
        if (!validatePass()) {
            document.getElementById('message').innerHTML += '<p>The password is not valid</p>';
        }
    }
})