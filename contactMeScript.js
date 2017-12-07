this.onload = function () {
    remaining();
    validationPassword()
}

function remaining() {
    var maxLength = document.querySelector("#Comments").getAttribute('maxlength')
    document.querySelector('#characterRemaining').textContent = maxLength + " Characters Remaining";

    document.querySelector("#Comments").addEventListener('keyup', function () {
        var currentLength = document.querySelector("#Comments").value.length;
        var currentRemaining = maxLength - currentLength;

        document.querySelector('#characterRemaining').textContent = currentRemaining + " Characters Remaining";
    })
}

function validationName() {
    var firstName = document.querySelector('#fName');
    var lastName = document.querySelector('#lName');
    // first name validation
    if (firstName.value.match(/^[a-zA-Z ]*$/) == null) {
        firstName.style.color = 'red';
        firstName.style.fontStyle = 'italic';
    } else {
        firstName.style.color = 'black';
        firstName.style.fontStyle = 'normal';
    }
    // last name validation
    if (lastName.value.match(/^[a-zA-Z ]*$/) == null) {
        lastName.style.color = 'red';
        lastName.style.fontStyle = 'italic';
    } else {
        lastName.style.color = 'black';
        lastName.style.fontStyle = 'normal';
    }
}

function validationPassword() {
    var password = document.querySelector('#password');
    var meter = document.querySelector('#strengthMeter');
    var text = document.querySelector('#strengthText');
    var strength = {
        0: "Unacceptable",
        1: "Weak",
        2: "Fair",
        3: "Strong",
        4: "Very Secure"
    }

    // 1 numeric, 1 or more special, 1 or more uppercase, 1 or more lower case 6 or more characters
    var weak = new RegExp("^(?=.*[a-z].*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
    // 1 numeric, 1 or more special, 1 or more uppercase, 1 or more lower case 6 or more characters
    var fair = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
    // 2 numeric, 1 or more special, 1 or more uppercase, 1 or more lower case 6 or more characters
    var strong = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9].*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
    // 2 numeric, 2 or more special, 1 or more uppercase, 1 or more lower case 8 or more characters
    var secure = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9].*[0-9])(?=.*[!@#\$%\^&\*].*[!@#\$%\^&\*])(?=.{8,})");

    password.addEventListener('input', function () {
        password.style.color = 'black';
        if (password.value.match(secure) != null) {
            meter.value = 4;
            text.innerText = strength[4];
        } else if (password.value.match(strong) != null) {
            meter.value = 3;
            text.innerText = strength[3];
        } else if (password.value.match(fair) != null) {
            meter.value = 2;
            text.innerText = strength[2];
        } else if (password.value.match(weak) != null || password.value.length > 6) {
            // since unaccptable passwaords are less than 6 characters I set the strength to weak if its more than 6 even if it doesnt meet the reg exp
            meter.value = 1;
            text.innerText = strength[1];
        } else {
            password.style.color = 'red';
            meter.value = 0;
            text.innerText = strength[0];
        }

    })
}
