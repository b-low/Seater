window.addEventListener("load", function() {
    var newButton = document.getElementById("new");
    newButton.addEventListener("click", function() {
        localStorage.clear();
    });
});