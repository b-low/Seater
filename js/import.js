window.addEventListener("load", function() {
    var input = document.getElementById("class-import-input");

    window.addEventListener("pagehide", function() {
        var parsedJson = JSON.parse(input.value.trim());
        console.log(parsedJson);
        localStorage.names = JSON.stringify(parsedJson.names);
        localStorage.layout = JSON.stringify(parsedJson.layout);
    });
});