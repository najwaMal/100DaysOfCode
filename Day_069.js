document.write("Day 69: Client-Side JavaScript </br>");

//Go to a new page
window.location = "https://www.google.com";

//Do something after a certain time
setTimeout(function() { alert("Hello!"); }, 6000);

//Do somthing after one click
onclick = function (){
    document.write("This appears after click");
}

//Do somthing شfter the page is loaded
window.onload = function (){
    document.write("This appears after loading the page");
}