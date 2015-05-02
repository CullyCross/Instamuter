/*function hide(name) {
    $("a:contains(" + name + ")").closest(".timelineItem").remove();
} */

/* $(document).ready(function() {

    chrome.storage.local.get({names: []} , function(result) {
        var names = result.names;

        for (i = 0; i < names.length; i++) { 
            hide(names[i]);
        }
    });    
}); */

function remove(element) {
    element.parentNode.removeChild(element);
}

function closest(elem, selector) {

   var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

    while (elem) {
        if (matchesSelector.bind(elem)(selector)) {
            return elem;
        } else {
            elem = elem.parentElement;
        }
    }
    return false;
}

function hide(name) {
	var as = document.getElementsByClassName("timelineBookmarkInfoUsername");
	//var as = document.getElementsByTagName("a");

	for (var i = 0; i < as.length; i++) {

		console.log(as[i] + " " + as.length);
		if(as[i].innerHTML.indexOf(name) != -1) {
			remove(closest(as[i], ".timelineItem"));
		}
	}
}

function myPluginLoadEvent(func) {

    var oldOnLoad = window.onload;

    if (typeof window.onload != 'function') {

        window.onload = func;
    } else { 
        window.onload = function () {

            oldOnLoad();

            func();
        }
    }
}

myPluginLoadEvent(function() {

    chrome.storage.local.get({names: []} , function(result) {
        var names = result.names;

        alert(names);

        for (i = 0; i < names.length; i++) {
            hide(names[i]);
        }
    });    
});

