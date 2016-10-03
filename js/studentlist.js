window.onload = function () {
    var input = document.getElementById("student-name-input");

    // Set the value for if they return to this page
    if (localStorage.names) {
        var existingList = "";
        JSON.parse(localStorage.names).forEach(function (name) {
            existingList += name + "\n";
        });
        input.value = existingList;
    }

    var next = document.getElementById("next");
    next.addEventListener("click", function () {
        var names = input.value.split("\n");
        names.forEach(function(name, index) {
            names[index] = name.trim();
        });
        localStorage.names = JSON.stringify(names);
    });
};