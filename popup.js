
function add() {
    event.preventDefault();

    var x = document.forms["form"]["name"].value;

    if(x == null || x == "") {
        alert("Fill the field");
    } else {
        chrome.storage.local.get({names: []} , function(result) {
            var names = result.names;
            names.push(x);
            chrome.storage.local.set({names: names}, function () {});
        });
    }
}

function removeRow(element) {

    chrome.storage.local.get({names: []} , function(result) {
            var names = result.names;
            names.splice(element.id, 1);
            chrome.storage.local.set({names: names}, function () {});
        });

    document.getElementById(element.id).removeChild( element.parentNode );
}

function addRow(row_id, name) {
    var li = document.createElement('li');

    li.innerHTML = name;

    li.id = row_id;

    li.addEventListener('click', function() {
        removeRow(this);
    });

    document.getElementById('list').appendChild(li);
}

window.addEventListener('load', function(evt) {
    document.getElementById('addName').addEventListener('submit', add)
})

window.onload = function() {

    chrome.storage.local.get({names: []} , function(result) {
            list = result.names;
            for(var i = 0; i < list.length; i++) {
                addRow(i, list[i]);
            }
    });

    
}