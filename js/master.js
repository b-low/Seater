var isResetting = false;

window.addEventListener("load", function() {
    var createButtons = document.getElementsByClassName("create-button");

    for (var i = 0; i < createButtons.length; i++) {
        createButtons[i].addEventListener("click", function(event) {
            if (event.currentTarget.className === "link create-button") {
                if (!confirm("You are currently leaving the class setup process and may lose all unsaved changes. Continue?")) {
                    event.preventDefault();
                    return;
                }
            }

            if (event.defaultPrevented === false) {
                isResetting = true;
                localStorage.removeItem("names");
                localStorage.removeItem("layout");
                localStorage.removeItem("hasRandomized");
                localStorage.removeItem("currentClass");
            }
        });
    }
});