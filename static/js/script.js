window.oncontextmenu = function (e) {
    e.preventDefault();

    if (e.target.className == "notebook-h1" || e.target.className == "note-h1") {
        for (var i = 0; i < document.getElementsByClassName("contextmenu").length; i++) {
            document.getElementsByClassName("contextmenu")[i].style.display = "none";
        }
        var grandparentId = e.target.parentElement.parentElement.id;
        var grandparent = document.getElementById(grandparentId);
        grandparent.querySelector("#contextmenu").style.display = "block";
    }
}

window.onclick = function () {
    for (var i = 0; i < document.getElementsByClassName("contextmenu").length; i++) {
        document.getElementsByClassName("contextmenu")[i].style.display = "none";
    }
}


var counter = 0;
function toggleSettings(){
    counter++;
    if(counter % 2 != 0){
        document.getElementById("settings").style.display="none";
    }
    else{
        document.getElementById("settings").style.display="block";
    }

}
