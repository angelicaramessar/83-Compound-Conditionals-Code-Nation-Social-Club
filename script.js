// set the correct username and password combination below
let correctUsername = "Ashley";
let correctPassword = "1234";


$("button").click(function() {
    let username = $(".username").val();
    let password = $(".password").val();
    
    if(username === correctUsername
    && password === correctPassword)  {
        $("h3").text("Welcome Back!");
        
    }
    else {
        $("p").text("Incorrect Username Or Password!");
    }
    
    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE



});