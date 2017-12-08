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
            document.getElementById('yourName').innerHTML = `Hello ${content[1]}`;
            if (firstChar.indexOf(name) == 0) {
                return firstChar.substring(name.length, firstChar.length);
            }
        }
    }
    document.getElementById('yourName').innerHTML = `Hello ${userName.enter}`;
}