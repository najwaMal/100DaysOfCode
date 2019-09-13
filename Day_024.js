document.write("Day 24: Jump- continue </br>");

for(var i = 1; i < 5; i++){
    inner:
    for (var j = 0; j < 5; j++){
        if (j == 2){
            document.writeln("skipped");
            continue inner;
        }
        document.writeln("i : " + i + ", j :" + j);
    }
    document.writeln();
}