var layout = [];
var randomizedNames = [];

window.onload = function () {
    var grid = document.getElementById("grid");

    if (localStorage.names) {
        randomizedNames = JSON.parse(localStorage.names)
    }

    for (var i = 0; i < 60; i++) {
        var cell = document.createElement("div");
        cell.className = "cell";
        cell.gridIndex = i;
        cell.addEventListener("click", onCellClick);

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

    var next = document.getElementById("next");
    next.addEventListener("click", function () {
        localStorage.layout = JSON.stringify(layout);
    });
};

function onCellClick(event) {
    var element = event.currentTarget;
    var index = element.gridIndex;

    if (layout[index]) {
        element.style.backgroundColor = "transparent";
        layout[index] = false;
    } else {
        element.style.backgroundColor = "#8D99AE";
        layout[index] = true;
    }
}