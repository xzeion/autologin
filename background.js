/*Find a way to store the last entered username, pass and url in a secure way
  or set the url and pull the saved user and pass for use*/
var user = "test";
var pass = "tester";
var URL = "hub.signal.co/login";

//this is how you access the toolbar button.
//chrome.browserAction.onClicked.addListener(function(tab) { alert('Icon Clicked!')});
chrome.browserAction.onClicked.addListener(function(tab) { login(user,pass)});

function userAgent(){
	/*
	Call this function every time button is clicked to swap
	the userAgent. Call login to relogin to signal.
    Check out this link as it has what you need to know:
    http://stackoverflow.com/questions/10334909/associate-a-custom-user-agent-to-a-specific-google-chrome-page-tab

    This one is good for some code reference
    http://stackoverflow.com/questions/23202136/changing-navigator-useragent-using-chrome-extension
	*/
	
}

function login(user, pass) {
    $('div.email-address input').text(user);
    $('div.password input').text(pass);
    $('button.submit').click()
}

