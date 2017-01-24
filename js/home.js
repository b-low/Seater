window.addEventListener("load", function() {
    var newButton = document.getElementById("new");
    newButton.addEventListener("click", function() {
        localStorage.removeItem("names");
        localStorage.removeItem("layout");
        localStorage.removeItem("hasRandomized");
    });
});