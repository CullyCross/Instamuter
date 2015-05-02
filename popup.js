
function add() {
    event.preventDefault();

    var x = document.forms["form"]["name"].value;

    if(x == null || x == "") {
        alert("Fill the field");
    } else {
        chrome.storage.local.get({names: []} , function(result) {
            var names = result.names;
            names.push(x);
            alert(names);
            chrome.storage.local.set({names: names}, function () {});
        });
    }
}

window.addEventListener('load', function(evt) {

    document.getElementById('addName').addEventListener('submit', add)
})