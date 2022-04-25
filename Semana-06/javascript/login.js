var email = document.getElementById('email');
var pass = document.getElementById('password');
var errorEmail = document.getElementById('error-email');
var errorPass = document.getElementById('error-pass');
var requiredEmail =  document.getElementById('required-email');
var requiredPass = document.getElementById('required-pass');
var re = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
var alphanumeric = ['a','b','c','d','e','f','g','h',
                    'i','j','k','l','m','n','o','p',
                    'q','r','s','t','u','v','w','x',
                    'y','z','A','B','C','D','E','F',
                    'G','H','I','J','K','L','M','N',
                    'O','P','Q','R','S','T','U','V',
                    'W','X','Y','Z','0','1','2','3',
                    '4','5','6','7','8','9'];

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateEmail() && validatePass()) {
        document.getElementById('message').classList.add('message');
        document.getElementById('message').innerHTML ='<p class="success"><i class="fa-solid fa-check"></i> Success</p><p>'
                                                        +'Email: '+email.value +'</p><p>'
                                                        +'Password: '+pass.value+'</p>';
    } else if (!validateEmail() || !validatePass()) {
        document.getElementById('message').classList.add('message');
        document.getElementById('message').innerHTML ='<p class="invalid"><i class="fa-solid fa-xmark"></i> Error. Wrong email or Password</p><p>'
                                                        +'Email: '+email.value +'</p><p>'
                                                        +'Password: '+pass.value+'</p>';
    }
})

email.addEventListener('blur', validateEmail);

function validateEmail(){
    if(email.value === ''){
        requiredEmail.style.display = 'block';
        document.getElementById('email').classList.add('error');
        return false;
    } else if(!re.test(email.value)){
            errorEmail.style.display = 'block';
            document.getElementById('email').classList.add('error');
            return false;
        } else {
            document.getElementById('email').classList.add('valid');
            return true;
        }
    }

pass.addEventListener('blur', validatePass);

function validatePass(){
    var cont = 0;
    var passLength= pass.value.length;
    for (var i = 0; i < passLength  ; i++){
        if(!alphanumeric.includes(pass.value[i])){
            cont++;
        }
    }
    if (pass.value === '') {
        requiredPass.style.display = 'block';
        document.getElementById('password').classList.add('error');
        return false;
    } else if(passLength < 8 || cont != 0){
            errorPass.style.display = 'block';
            document.getElementById('password').classList.add('error');
            return false;
        } else{
            document.getElementById('password').classList.add('valid');
            return true;
        }
}

email.addEventListener('focus', fixingError);

pass.addEventListener('focus', fixingErrorPass);

function fixingError(){
    errorEmail.style.display = 'none';
    requiredEmail.style.display = 'none';
}

function fixingErrorPass(){
    errorPass.style.display = 'none';
    requiredPass.style.display = 'none';
}
