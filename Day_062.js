document.write("Day 62: Function </br>");

function hypotenuse(a, b) {
    function square(x) { return x*x; }
    return Math.sqrt(square(a) + square(b));
    }
    document.write(hypotenuse(3,4));

