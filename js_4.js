
var n = 4;
var size = 2 * n - 1;

for (var i = 0; i < size; i++) {
    var line = "";
    
    for (var j = 0; j < size; j++) {
        var top = i;
        var bottom = size - 1 - i;
        var left = j;
        var right = size - 1 - j;
        
        var value = n - Math.min(Math.min(top, bottom), Math.min(left, right));
        line = line + value + " ";
    }
    
    console.log(line);
}
