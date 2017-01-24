window.addEventListener("load", function() {
    var classes = [];

    // Load the classes
    if (!localStorage.classes) {
        return;
    }

    classes = JSON.parse(localStorage.classes);

    console.log(localStorage);
    var classContainer = document.getElementById("class-container");
    for (var i = 0; i < classes.length; i++) {
        var classroom = document.createElement("div");
        classroom.className = "classroom";

        var classroomTitle = document.createElement("h2");
        classroomTitle.innerText = "Class " + (i + 1);
        classroomTitle.className = "classroom-title button";
        classroomTitle.layout = classes[i].layout;
        classroomTitle.names = classes[i].names;
        classroomTitle.addEventListener("click", function() {
            var element = event.currentTarget;
            localStorage.names = JSON.stringify(element.names);
            localStorage.layout = JSON.stringify(element.layout);
            localStorage.hasRandomized = true;

            document.location.href = "final.html";
        });

        var deleteButton = document.createElement("p");
        deleteButton.innerText = "X";
        deleteButton.className = "delete button";
        deleteButton.index = i;
        deleteButton.addEventListener("click", function() {
            if (confirm("Are you sure you want to delete this class?")) {
                var element = event.currentTarget;

                classes.splice(element.index, 1);
                localStorage.classes = JSON.stringify(classes);

                document.location.reload();
            }
        });

        classroom.appendChild(classroomTitle);
        classroom.appendChild(deleteButton);
        classContainer.appendChild(classroom);
    }
});