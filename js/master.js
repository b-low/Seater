window.addEventListener("load", function() {
    var createButtons = document.getElementsByClassName("create-button");

    for (var i = 0; i < createButtons.length; i++) {
        createButtons[i].addEventListener("click", function() {
            localStorage.removeItem("names");
            localStorage.removeItem("layout");
            localStorage.removeItem("hasRandomized");
            localStorage.removeItem("currentClass");
        });
    }
});