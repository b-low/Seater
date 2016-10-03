var layout = [];
var randomizedNames = [];

window.onload = function () {
    randomizeNames();
    populate();

    var randomize = document.getElementById("randomize");
    randomize.addEventListener("click", function() {
        randomizeNames();
        populate();
    });
};

function randomizeNames() {
    if (!localStorage.names) {
        return;
    }

    var names = JSON.parse(localStorage.names);
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

    randomizedNames = shuffled;
    console.log(shuffled);
}

function populate() {
    var grid = document.getElementById("grid");
    grid.innerHTML = "";
    var namesIndex = 0;

    for (var i = 0; i < 60; i++) {
        var cell = document.createElement("div");
        cell.className = "cell";
        cell.gridIndex = i;

        if (localStorage.layout) {
            var existingLayout = JSON.parse(localStorage.layout);

            if (existingLayout[i]) {
                layout[i] = true;

                if (namesIndex < randomizedNames.length) {
                    cell.innerHTML = randomizedNames[namesIndex];
                    namesIndex++;
                }
            } else {
                layout[i] = false;
            }
        } else {
            layout[i] = false;
        }

        grid.appendChild(cell);
    }
}