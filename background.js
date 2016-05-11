
//this is how you access the toolbar button.
//chrome.browserAction.onClicked.addListener(function(tab) { alert('Icon Clicked!')});



chrome.browserAction.onClicked.addListener(function(tab) { alert('The function did run') });
