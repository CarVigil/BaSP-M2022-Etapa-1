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
    if (validateName() && validateLastname() && validateDni() && validateDate()
        && validatePhone() && validateAddress() && validateLocation() && validateZip()
        && validateEmail() && validatePass() && validateRepeatPass()) {
        fetch(`https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${formName.value}&lastName=${lastname.value}&dni=${dni.value}&dob=${dob}&phone=${phone.value}&address=${address.value}&city=${loc.value}&zip=${zip.value}&email=${email.value}&password=${password.value}`)
            .then(response => response.json())
            .then(data => {
                saveData();
                document.getElementById('modal').style.display = 'block';
                document.getElementById('close').onclick = function () {
                    document.getElementById('modal').style.display = 'none';
                }
                document.getElementById('message').classList.add('message');
                document.getElementById('message').innerHTML =
                '<p class="success"><i class="fa-solid fa-check"></i> '+ data.msg + '</p>';
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
            })
            .catch(error => {
                console.error(error);
            });
    } else {
        document.getElementById('modal').style.display = 'block';
        document.getElementById('close').onclick = function () {
            document.getElementById('modal').style.display = 'none';
        }
        if (!validateName() || !validateLastname() || !validateDni() || !validateDate()
            || !validatePhone() || !validateAddress() || !validateLocation() || !validateZip()
            || !validateEmail() || !validatePass() || !validateRepeatPass()) {
            document.getElementById('message').classList.add('message');
            document.getElementById('message').innerHTML = '<p class="invalid"><i class="fa-solid fa-xmark"></i> There is an error in the data, it hasn\'t been saved.</p>';
        }
        if (!validateName()) {
            document.getElementById('message').innerHTML += '<p>The name must contain only letters and must be 3 characters or more.</p>';
        }
        if (!validateLastname()) {
            document.getElementById('message').innerHTML += '<p>The lastname must contain only letters and must be 3 characters or more.</p>';
        }
        if (!validateDni()) {
            document.getElementById('message').innerHTML += '<p>The DNI must contain numbers and must be 7 characters or more.</p>';
        }
        if (!validateDate()) {
            document.getElementById('message').innerHTML += '<p>The date must be before today and over 18 years</p>';
        }
        if (!validatePhone()) {
            document.getElementById('message').innerHTML += '<p>The phone number must contain numbers and must be 10 characters.</p>';
        }
        if (!validateAddress()) {
            document.getElementById('message').innerHTML += '<p>The address must have letters and numbers with a space between</p>';
        }
        if (!validateLocation()) {
            document.getElementById('message').innerHTML += '<p>The location must be only letters and numbers</p>';
        }
        if (!validateZip()) {
            document.getElementById('message').innerHTML += '<p>Zip code must be only a number with a length of 4 or 5 characters</p>';
        }
        if (!validateEmail()) {
            document.getElementById('message').innerHTML += '<p>The email is not valid</p>';
        }
        if (!validatePass()) {
            document.getElementById('message').innerHTML += '<pThe password is not valid</p>';
        }
        if (!validateRepeatPass()) {
            document.getElementById('message').innerHTML += '<p>Password is not valid and must match</p>';
        }
    }
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
formName.addEventListener('blur', validateName);
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
lastname.addEventListener('blur', validateLastname);
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
dni.addEventListener('blur', validateDni);
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
birth.addEventListener('blur', validateDate);
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

phone.addEventListener('blur', validatePhone);
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
address.addEventListener('blur', validateAddress);
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
            for (var i = 0; i < address.value.indexOf(' '); i++) {
                if (!alphabetic.includes(address.value[i]) && address.value[i] != ' ' && !numeric.includes(address.value[i])) {
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
loc.addEventListener('blur', validateLocation);
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
zip.addEventListener('blur', validateZip);
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
email.addEventListener('blur', validateEmail);
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
pass.addEventListener('blur', validatePass);
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
repeatPass.addEventListener('blur', validateRepeatPass);
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
formName.addEventListener('focus', fixingName);
function fixingName() {
    document.getElementById('error-name').style.display = 'none';
    document.getElementById('required-name').style.display = 'none';
}
lastname.addEventListener('focus', fixingLastname);
function fixingLastname() {
    document.getElementById('error-lastname').style.display = 'none';
    document.getElementById('required-lastname').style.display = 'none';
}
dni.addEventListener('focus', fixingDni);
function fixingDni() {
    document.getElementById('error-dni').style.display = 'none';
    document.getElementById('required-dni').style.display = 'none';
}
birth.addEventListener('focus', fixingBirth);
function fixingBirth() {
    document.getElementById('error-birth').style.display = 'none';
    document.getElementById('required-birth').style.display = 'none';
}
phone.addEventListener('focus', fixingPhone);
function fixingPhone() {
    document.getElementById('error-phone').style.display = 'none';
    document.getElementById('required-phone').style.display = 'none';
}
address.addEventListener('focus', fixingAddress);
function fixingAddress() {
    document.getElementById('error-address').style.display = 'none';
    document.getElementById('required-address').style.display = 'none';
}
loc.addEventListener('focus', fixingLoc);
function fixingLoc() {
    document.getElementById('error-location').style.display = 'none';
    document.getElementById('required-location').style.display = 'none';
}
zip.addEventListener('focus', fixingZip);
function fixingZip() {
    document.getElementById('error-zip').style.display = 'none';
    document.getElementById('required-zip').style.display = 'none';
}
email.addEventListener('focus', fixingEmail);
function fixingEmail() {
    document.getElementById('error-email').style.display = 'none';
    document.getElementById('required-email').style.display = 'none';
}
pass.addEventListener('focus', fixingPass);
function fixingPass() {
    document.getElementById('error-pass').style.display = 'none';
    document.getElementById('required-pass').style.display = 'none';
}
repeatPass.addEventListener('focus', fixingRepeatPass);
function fixingRepeatPass() {
    document.getElementById('error-rpass').style.display = 'none';
    document.getElementById('not-match').style.display = 'none';
    document.getElementById('required-rpass').style.display = 'none';
}