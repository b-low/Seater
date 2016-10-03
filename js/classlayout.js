window.onload = function () {
    var grid = document.getElementById("grid");

    for (var i = 0; i < 6; i++) {
        // Create the row
        var row = document.createElement("div");
        row.className = "row";
        grid.appendChild(row);

        for (var j = 0; j < 10; j++) {
            // Create cells
            var cell = document.createElement("div");
            cell.className = "cell";
            row.appendChild(cell);
        }
    }
};