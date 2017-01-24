var layout = [];
var names = [];

window.addEventListener("load", function() {
    // Load the names
    if (!localStorage.names) {
        return;
    }
    names = JSON.parse(localStorage.names);

    // Load the layout
    if (!localStorage.layout) {
        return;
    }
    layout = JSON.parse(localStorage.layout);

    // Only randomize the class if this page is loading for the first time
    if (localStorage.hasRandomized === undefined) {
        randomizeNames();
        localStorage.hasRandomized = true;
    }
    populate();

    var randomizeButton = document.getElementById("randomize");
    randomizeButton.addEventListener("click", function() {
        randomizeNames();
        populate();
    });

    var saveButton = document.getElementById("save");
    saveButton.addEventListener("click", function() {
        var classes = [];
        if (localStorage.classes) {
            classes = JSON.parse(localStorage.classes);
        }

        classes.push(
            {
                "names": names,
                "layout": layout
            }
        );
        localStorage.classes = JSON.stringify(classes);

        alert("Successively saved this classroom as Class " + classes.length)
    });

    window.addEventListener("pagehide", function() {
        localStorage.names = JSON.stringify(names);
    });
});

function randomizeNames() {
    var shuffled = [];

    for (var i = 0; i < names.length; i++) {
        // Randomly swap the current number with a previous number in the array

        // A random number in [0, i]
        var swapIndex = Math.floor(Math.random() * (i + 1));

        // Swap the current name and the randomly chosen one
        var temp = names[i];
        shuffled[i] = shuffled[swapIndex];
        shuffled[swapIndex] = temp;
    }

    names = shuffled;
}

function populate() {
    var grid = document.getElementById("grid");
    grid.innerHTML = "";
    var namesIndex = 0;

    for (var i = 0; i < 60; i++) {
        var cell = document.createElement("div");
        cell.className = "cell";
        cell.gridIndex = i;

        if (layout[i] && namesIndex < names.length) {
            cell.innerHTML = names[namesIndex];
            namesIndex++;
        }
        grid.appendChild(cell);
    }
}