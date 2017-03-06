window.addEventListener("load", function() {
    var classes = {};

    // Load the classes
    if (!localStorage.classes) {
        return;
    }

    classes = JSON.parse(localStorage.classes);

    var classContainer = document.getElementById("class-container");
    console.log(classes);
    for (className in classes) {
        var classroom = document.createElement("div");
        classroom.className = "classroom";

        console.log(className);

        var classroomName = document.createElement("h2");
        classroomName.innerText = className;
        classroomName.className = "classroom-title button";
        classroomName.layout = classes[className].layout;
        classroomName.names = classes[className].names;
        classroomName.addEventListener("click", function() {
            var element = event.currentTarget;
            localStorage.names = JSON.stringify(element.names);
            localStorage.layout = JSON.stringify(element.layout);
            localStorage.hasRandomized = true;
            localStorage.currentClass = element.innerText;
            document.location.href = "final.html";
        });

        var deleteButton = document.createElement("p");
        deleteButton.innerText = "X";
        deleteButton.className = "delete button";
        deleteButton.classroomName = className;
        deleteButton.addEventListener("click", function() {
            var element = event.currentTarget;

            if (confirm("Are you sure you want to delete " + element.classroomName + "?")) {

                delete classes[element.classroomName];
                localStorage.classes = JSON.stringify(classes);

                document.location.reload();
            }
        });

        classroom.appendChild(classroomName);
        classroom.appendChild(deleteButton);
        classContainer.appendChild(classroom);
    }
});