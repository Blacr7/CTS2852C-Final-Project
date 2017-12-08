//save the cookies of the users purchase
var userName = {};
function setCookie() {
    var cookieName = 'UserName';
    var cookieValue = userName.enter;
    var date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); //delete after 6 months
    var expires = "expires=" + date.toUTCString(); //format to UTC
    document.cookie = `${cookieName}=${cookieValue}; ${expires};path=/`; // format for the cookie

}

// get the cookies from the users last visit
function getCookie() {
    var visits = 0;

    if (document.cookie == "") {// if no cookies exit
        userName.enter = prompt("Please Enter your name", '');
        setCookie();
    } else {
        var name = document.cookie.split(';');// spilt cookies into [${cookieName}=${cookieValue}]
        var content = document.cookie.split('=');
        for (var i = 0; i < name.length; i++) {
            var firstChar = name[i];
            while (firstChar.charAt(0) == ' ') {
                firstChar = firstChar.substring(1);
            }
            document.getElementById('yourName').innerHTML = `Hello ${content[1]}, you've been here ${localStorage.Visits = Number(localStorage.Visits)+1} time(s)!`;

            if (firstChar.indexOf(name) == 0) {
                return firstChar.substring(name.length, firstChar.length);
            }
        }
    }

    if (typeof(Storage) !== "undefined") {
        localStorage.setItem("Visits", visits);
    }else{
        document.querySelector('#yourName').innerHTML = "Sorry, your browser does not support web storage"
    }

    document.getElementById('yourName').innerHTML = `Hello ${userName.enter}, This is the first time You've been here!`;
    
}