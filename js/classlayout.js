var layout = [];
var randomizedNames = [];
var mouseDown = false;
var painting = true;

window.addEventListener("load", function() {
    var grid = document.getElementById("grid");

    if (localStorage.names) {
        randomizedNames = JSON.parse(localStorage.names)
    }

    for (var i = 0; i < 60; i++) {
        var cell = document.createElement("div");
        cell.className = "cell";
        cell.gridIndex = i;
        cell.addEventListener("mousedown", onCellMouseDown);
        cell.addEventListener("mouseover", onCellOver);

        if (localStorage.layout) {
            var existingLayout = JSON.parse(localStorage.layout);

            if (existingLayout[i]) {
                layout[i] = true;
                cell.style.backgroundColor = "#8D99AE";
            } else {
                layout[i] = false;
            }
        } else {
            layout[i] = false;
        }

        grid.appendChild(cell);
    }

    window.addEventListener("beforeunload", function() {
        localStorage.layout = JSON.stringify(layout);
    });
    window.addEventListener("mousedown", function(event) {
        mouseDown = true;
    });
    window.addEventListener("mouseup", function(event) {
        mouseDown = false;
    });
});

function onCellMouseDown(event) {
    var element = event.currentTarget;
    var index = element.gridIndex;

    painting = !layout[element.gridIndex];
    if (painting) {
        element.style.backgroundColor = "#8D99AE";
        layout[index] = true;
    } else {
        element.style.backgroundColor = "transparent";
        layout[index] = false;
    }
}

function onCellOver(event) {
    if (mouseDown !== true) {
        return;
    }

    var element = event.currentTarget;
    var index = element.gridIndex;
    setTimeout(function() {
        if (painting) {
            element.style.backgroundColor = "#8D99AE";
            layout[index] = true;
        } else {
            element.style.backgroundColor = "transparent";
            layout[index] = false;
        }
    }, 0);
}