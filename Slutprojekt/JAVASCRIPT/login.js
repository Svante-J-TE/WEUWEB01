function clicked() {

    var user = document.getElementById('email')
    var pass = document.getElementById('password');

    var coruser = "svante";
    var corpass = "jonsson";

    if(user.value == coruser){

        if(pass.value == corpass) {

            window.alert("You are logged in as " + user.value);
            window.open("../HTML/StartPage.html");
        }
        else{
            window.alert("Wrong username or password");
        }
    }
    else{
        window.alert("Wrong username or password");
    }
}