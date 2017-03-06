window.addEventListener("load", function() {
    var title = document.getElementById("title");
    title.addEventListener("click", function() {
        if (confirm("You are currently leaving the class setup process and may lose all unsaved changes. Continue?")) {
            window.location = "index.html";
        }
    });

    var navLinks = document.getElementsByClassName("link");
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener("click", function(event) {
            if (confirm("You are currently leaving the class setup process and may lose all unsaved changes. Continue?")) {
                localStorage.removeItem("currentClass");
            } else {
                event.preventDefault();
            }
        });
    }

    if (localStorage.currentClass) {
        updateCurrentClass(localStorage.currentClass);
    }
});

function updateCurrentClass(className) {
    localStorage.currentClass = className;
    var currentClass = document.getElementById("current-class");
    currentClass.innerHTML = className;
}