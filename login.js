/*Find a way to store the last entered username, pass and url in a secure way
  or set the url and pull the saved user and pass for use*/
var user = "";
var pass = "";
var URL = "hub.signal.co/login";



function userAgent(){
	/*
	Call this function every time button is clicked to swap
	the userAgent. Call login to relogin to signal.
	*/
	
}

function login(user, pass) {
	if(document.URL != URL){
		/*
		Get URL
		login(user,pass)
		*/
	}
	else{
	    $('div.email-address input').text(user);
	    $('div.password input').text(pass);
	    $('button.submit').click()
	}

}

setTimeout(login, 10000)
