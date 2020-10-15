function clicked() {

    var user = document.getElementById('username');
    var pass = document.getElementById('password');

    var coruser = "svante";
    var corpass = "jonsson";

    if(user.value == coruser){

        if(pass.value == corpass) {

            window.alert("You are logged in as " + user.value);
            window.open("index2.html");
        }
        else{
            window.alert("Wrong username or password");
        }
    }
    else{
        window.alert("Wrong username or password");
    }
}