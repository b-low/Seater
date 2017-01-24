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
        classroom.className = "classroom button wrapper";

        var classroomTitle = document.createElement("h2");
        classroomTitle.innerText = "Class " + (i + 1);
        classroomTitle.className = "classroom-title";

        classroom.layout = classes[i].layout;
        classroom.names = classes[i].names;
        classroom.addEventListener("click", function() {
            var element = event.currentTarget;
            localStorage.names = JSON.stringify(element.names);
            localStorage.layout = JSON.stringify(element.layout);
            localStorage.hasRandomized = true;

            document.location.href = "final.html";
        });

        classroom.appendChild(classroomTitle);
        classContainer.appendChild(classroom);
    }
});