document.write("Day 73: Dialog boxes </br>");
do {
    var name = prompt("What is your name?");
    var correct = confirm("You entered '" + name + "'.\n" + "Click Okay to proceed or Cancel to re-enter.");
    } while(!correct)
    alert("Hello, " + name);