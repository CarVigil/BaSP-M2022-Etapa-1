var formName = document.getElementById('name');
var lastname = document.getElementById('lastname');
var dni = document.getElementById('dni');
var birth = document.getElementById('birth');
var phone = document.getElementById('phone');
var address = document.getElementById('address');
var loc = document.getElementById('location');
var zip = document.getElementById('zip-code');
var email = document.getElementById('email');
var pass = document.getElementById('password');
var repeatPass = document.getElementById('repeat-pass');
var re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var alphabetic = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var alphanumeric = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
    'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z', '0', '1', '2', '3',
    '4', '5', '6', '7', '8', '9'];
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var formatDate = birth.value.split('-');
    var dob = formatDate.slice(1, 2) + '/' + formatDate.slice(2) + '/' + formatDate.slice(0, 1);
    fetch(`https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${formName.value}&lastName=${lastname.value}&dni=${dni.value}&dob=${dob}&phone=${phone.value}&address=${address.value}&city=${loc.value}&zip=${zip.value}&email=${email.value}&password=${password.value}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('modal').style.display = 'block';
            document.getElementById('close').onclick = function () {
                document.getElementById('modal').style.display = 'none';
            }
            document.getElementById('message').classList.add('message');
            document.getElementById('message').innerHTML = '<h3>Request successful</h3>';
            if (data.success) {
                document.getElementById('message').innerHTML +=
                    '<p class="success"><i class="fa-solid fa-check"></i> ' + data.msg + '</p>';
                document.getElementById('message').innerHTML += '<p>Name: ' + formName.value
                    + '</p><p>Lastname: ' + lastname.value
                    + '</p><p>DNI: ' + dni.value
                    + '</p><p>Birth date: ' + birth.value
                    + '</p><p>Phone: ' + address.value
                    + '</p><p>Location: ' + loc.value
                    + '</p><p>Zip code: ' + zip.value
                    + '</p><p>Email: ' + email.value
                    + '</p><p>Password: ' + pass.value
                    + '</p><p>RepeatPassword: ' + repeatPass.value + '</p>';
                saveData();
            } else {
                for (var i = 0; data.errors.length; i++) {
                    document.getElementById('message').innerHTML +=
                        '<p class="invalid">' + data.errors[i].msg + '</p>';
                }
            }
        })
        .catch(error => console.log(error));
});
function saveData() {
    localStorage.setItem('name', formName.value);
    localStorage.setItem('lastName', lastname.value)
    localStorage.setItem('email', email.value);
    localStorage.setItem('dni', dni.value);
    localStorage.setItem('dob', birth.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('address', address.value);
    localStorage.setItem('location', loc.value);
    localStorage.setItem('zip', zip.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('repeat password', repeatPass.value);
}
window.onload = function localDataCompleteForm() {
    localStorage.getItem('name') !== null ? formName.value = localStorage.getItem('name') : null;
    localStorage.getItem('lastName') !== null ? lastname.value = localStorage.getItem('lastName') : null;
    localStorage.getItem('email') !== null ? email.value = localStorage.getItem('email') : null;
    localStorage.getItem('dni') !== null ? dni.value = localStorage.getItem('dni') : null;
    localStorage.getItem('dob') !== null ? birth.value = localStorage.getItem('dob') : null;
    localStorage.getItem('phone') !== null ? phone.value = localStorage.getItem('phone') : null;
    localStorage.getItem('address') !== null ? address.value = localStorage.getItem('address') : null;
    localStorage.getItem('location') !== null ? loc.value = localStorage.getItem('location') : null;
    localStorage.getItem('zip') !== null ? zip.value = localStorage.getItem('zip') : null;
    localStorage.getItem('password') !== null ? pass.value = localStorage.getItem('password') : null;
    localStorage.getItem('repeat password') !== null ? repeatPass.value = localStorage.getItem('repeat password') : null;
}
function validateName() {
    var cont = 0;
    var numbers = 0;
    for (var i = 0; i < formName.value.length; i++) {
        if (numeric.includes(formName.value[i])) {
            numbers++;
        } else if (!alphabetic.includes(formName.value[i]) && formName.value[i] != ' ') {
            cont++;
        }
    }
    if (formName.value === '') {
        document.getElementById('required-name').style.display = 'block';
        formName.classList.add('error');
        return false;
    } else if (formName.value.length < 3 || numbers != 0 || cont != 0) {
        document.getElementById('error-name').style.display = 'block';
        formName.classList.add('error');
        return false;
    } else {
        formName.classList.add('valid');
        return true;
    }
}
function validateLastname() {
    var cont = 0;
    var numbers = 0;
    for (var i = 0; i < lastname.value.length; i++) {
        if (numeric.includes(lastname.value[i])) {
            numbers++;
        } else if (!alphabetic.includes(lastname.value[i]) && lastname.value[i] != ' ') {
            cont++;
        }
    }
    if (lastname.value === '') {
        document.getElementById('required-lastname').style.display = 'block';
        lastname.classList.add('error');
        return false;
    } else if (lastname.value.length < 3 || numbers != 0 || cont != 0) {
        document.getElementById('error-lastname').style.display = 'block';
        lastname.classList.add('error');
        return false;
    } else {
        lastname.classList.add('valid');
        return true;
    }
}
function validateDni() {
    var cont = 0;
    for (var i = 0; i < dni.value.length; i++) {
        if (!numeric.includes(dni.value[i])) {
            cont++;
        }
    }
    if (dni.value === '') {
        document.getElementById('required-dni').style.display = 'block';
        dni.classList.add('error');
        return false;
    } else if (dni.value.length < 8 || cont != 0) {
        document.getElementById('error-dni').style.display = 'block';
        dni.classList.add('error');
        return false;
    } else {
        dni.classList.add('valid');
        return true;
    }
}
function validateDate() {
    var today = new Date();
    if (birth.value.substring(8) >= today.getDate()
        && birth.value.substring(5, 7) >= today.getMonth()
        && birth.value.substring(0, 4) >= today.getFullYear()) {
        document.getElementById('error-birth').style.display = 'block';
        birth.classList.add('error');
        return false;
    }
    if (today.getFullYear() - birth.value.substring(0, 4) < 18) {
        document.getElementById('error-birth').style.display = 'block';
        birth.classList.add('error');
        return false;
    } else {
        birth.classList.add('valid');
        return true;
    }
}
function validatePhone() {
    var cont = 0;
    for (var i = 0; i < phone.value.length; i++) {
        if (!numeric.includes(phone.value[i])) {
            cont++;
        }
    }
    if (phone.value === '') {
        document.getElementById('required-phone').style.display = 'block';
        phone.classList.add('error');
        return false;
    } else if (phone.value.length != 10 || cont != 0) {
        document.getElementById('error-phone').style.display = 'block';
        phone.classList.add('error');
        return false;
    } else {
        phone.classList.add('valid');
        return true;
    }
}
function validateAddress() {
    var cont = 0;
    if (address.value === '') {
        document.getElementById('required-address').style.display = 'block';
        address.classList.add('error');
        return false;
    } else {
        if (address.value.indexOf(' ') < 1) {
            document.getElementById('error-address').style.display = 'block';
            address.classList.add('error');
            return false;
        } else {
            for (var i = 0; i < address.value.length; i++) {
                if (!alphanumeric.includes(address.value[i]) && address.value[i] != ' ') {
                    cont++;
                }
            }
            if (address.value.length < 5 || cont != 0) {
                document.getElementById('error-address').style.display = 'block';
                address.classList.add('error');
                return false;
            } else {
                address.classList.add('valid');
                return true;
            }
        }
    }
}
function validateLocation() {
    var cont = 0;
    for (var i = 0; i < loc.value.length; i++) {
        if (!alphanumeric.includes(loc.value[i])) {
            cont++;
        }
    }
    if (loc.value === '') {
        document.getElementById('required-location').style.display = 'block';
        loc.classList.add('error');
        return false;
    } else if (loc.value.length < 3 || cont != 0) {
        document.getElementById('error-location').style.display = 'block';
        loc.classList.add('error');
        return false;
    } else {
        loc.classList.add('valid');
        return true;
    }
}
function validateZip() {
    var cont = 0;
    for (var i = 0; i < zip.value.length; i++) {
        if (!numeric.includes(zip.value[i])) {
            cont++;
        }
    }
    if (zip.value === '') {
        document.getElementById('required-zip').style.display = 'block';
        zip.classList.add('error');
        return false;
    } else if (cont != 0 || (zip.value.length < 4 || zip.value.length > 5)) {
        document.getElementById('error-zip').style.display = 'block';
        zip.classList.add('error');
        return false;
    } else {
        zip.classList.add('valid');
        return true;
    }
}
function validateEmail() {
    if (email.value === '') {
        document.getElementById('required-email').style.display = 'block';
        email.classList.add('error');
        return false;
    } else if (!re.test(email.value)) {
        document.getElementById('error-email').style.display = 'block';
        email.classList.add('error');
        return false;
    } else {
        email.classList.add('valid');
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
        document.getElementById('required-pass').style.display = 'block';
        document.getElementById('password').classList.add('error');
        return false;
    } else if (passLength < 8 || cont != 0 || letters == 0 || numbers == 0) {
        document.getElementById('error-pass').style.display = 'block';
        document.getElementById('password').classList.add('error');
        return false;
    } else {
        document.getElementById('password').classList.add('valid');
        return true;
    }
}
function validateRepeatPass() {
    var passLength = repeatPass.value.length;
    var cont = 0;
    var letters = 0;
    var numbers = 0;
    for (var i = 0; i < passLength; i++) {
        if (!alphabetic.includes(repeatPass.value[i]) && !numeric.includes(repeatPass.value[i])) {
            cont++;
        }
        if (alphabetic.includes(repeatPass.value[i])) {
            letters++;
        }
        if (numeric.includes(repeatPass.value[i])) {
            numbers++;
        }
    }
    if (repeatPass.value === '') {
        document.getElementById('required-rpass').style.display = 'block';
        document.getElementById('repeat-pass').classList.add('error');
        return false;
    } else if (passLength < 8 || cont != 0 || letters == 0 || numbers == 0) {
        document.getElementById('error-rpass').style.display = 'block';
        document.getElementById('repeat-pass').classList.add('error');
        return false;
    } else if (pass.value != repeatPass.value) {
        document.getElementById('not-match').style.display = 'block';
        document.getElementById('repeat-pass').classList.add('error');
        return false;
    } else {
        document.getElementById('repeat-pass').classList.add('valid');
        return true;
    }
}
function fixingName() {
    document.getElementById('error-name').style.display = 'none';
    document.getElementById('required-name').style.display = 'none';
}
function fixingLastname() {
    document.getElementById('error-lastname').style.display = 'none';
    document.getElementById('required-lastname').style.display = 'none';
}
function fixingDni() {
    document.getElementById('error-dni').style.display = 'none';
    document.getElementById('required-dni').style.display = 'none';
}
function fixingBirth() {
    document.getElementById('error-birth').style.display = 'none';
    document.getElementById('required-birth').style.display = 'none';
}
function fixingPhone() {
    document.getElementById('error-phone').style.display = 'none';
    document.getElementById('required-phone').style.display = 'none';
}
function fixingAddress() {
    document.getElementById('error-address').style.display = 'none';
    document.getElementById('required-address').style.display = 'none';
}
function fixingLoc() {
    document.getElementById('error-location').style.display = 'none';
    document.getElementById('required-location').style.display = 'none';
}
function fixingZip() {
    document.getElementById('error-zip').style.display = 'none';
    document.getElementById('required-zip').style.display = 'none';
}
function fixingEmail() {
    document.getElementById('error-email').style.display = 'none';
    document.getElementById('required-email').style.display = 'none';
}
function fixingPass() {
    document.getElementById('error-pass').style.display = 'none';
    document.getElementById('required-pass').style.display = 'none';
}
function fixingRepeatPass() {
    document.getElementById('error-rpass').style.display = 'none';
    document.getElementById('not-match').style.display = 'none';
    document.getElementById('required-rpass').style.display = 'none';
}
formName.addEventListener('blur', validateName);
lastname.addEventListener('blur', validateLastname);
dni.addEventListener('blur', validateDni);
birth.addEventListener('blur', validateDate);
phone.addEventListener('blur', validatePhone);
address.addEventListener('blur', validateAddress);
loc.addEventListener('blur', validateLocation);
zip.addEventListener('blur', validateZip);
email.addEventListener('blur', validateEmail);
pass.addEventListener('blur', validatePass);
repeatPass.addEventListener('blur', validateRepeatPass);
formName.addEventListener('focus', fixingName);
lastname.addEventListener('focus', fixingLastname);
dni.addEventListener('focus', fixingDni);
birth.addEventListener('focus', fixingBirth);
phone.addEventListener('focus', fixingPhone);
address.addEventListener('focus', fixingAddress);
loc.addEventListener('focus', fixingLoc);
zip.addEventListener('focus', fixingZip);
email.addEventListener('focus', fixingEmail);
pass.addEventListener('focus', fixingPass);
repeatPass.addEventListener('focus', fixingRepeatPass);