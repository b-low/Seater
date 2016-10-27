window.onload = function () {
    var input = document.getElementById("student-name-input");

    // Set the value for if they return to this page
    if (localStorage.names) {
        var existingList = "";

        var names = JSON.parse(localStorage.names);
        names.forEach(function (name, index) {
            existingList += name;

            if (index < names.length - 1) {
                existingList += "\n";
            }
        });
        input.value = existingList;
    }

    window.addEventListener("beforeunload", function() {
        var names = [];

        input.value.split("\n").forEach(function(name, index) {
            if (name !== "") {
                names.push(name.trim());
            }
        });
        localStorage.names = JSON.stringify(names);
    });
};