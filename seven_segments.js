let canv = document.getElementById("myCanvas");
let ctx = canv.getContext("2d");
ctx.strokeRect(70, 0, 140, 210);
// initial color of rectangulars     
ctx.fillStyle = "rgb(210, 210, 210)";
ctx.fillRect(100, 20, 70, 10);   // print rect A
ctx.fillRect(170, 30, 10, 70);   // print rect B
ctx.fillRect(170, 110, 10, 70);  // print rect C  
ctx.fillRect(100, 180, 70, 10);  // print rect D
ctx.fillRect(90, 110, 10, 70);   // print rect E
ctx.fillRect(90, 30, 10, 70);    // print rect F     
ctx.fillRect(100, 100, 70, 10);  // print rect G
ctx.fillRect(190, 180, 10, 10);  // print dot
//array of digits built from segments 
const digitsArray = [
    ["A", "B", "C", "D", "E", "F", "Dot"],       // segments forming a digit 0
    ["B", "C", "Dot"],                           // segments forming a digit 1
    ["A", "B", "D", "E", "G", "Dot"],            // segments forming a digit 2
    ["A", "B", "C", "D", "G", "Dot"],            // segments forming a digit 3
    ["B", "C", "F", "G", "Dot"],                 // segments forming a digit 4
    ["A", "C", "D", "F", "G", "Dot"],            // segments forming a digit 5
    ["A", "C", "D", "E", "F", "G", "Dot"],       // segments forming a digit 6
    ["A", "B", "C", "Dot"],                      // segments forming a digit 7
    ["A", "B", "C", "D", "E", "F", "G", "Dot"],  // segments forming a digit 8
    ["A", "B", "C", "D", "F", "G", "Dot"]        // segments forming a digit 9     
    ];
// the main function
function myFunction() {      
    // clean seven-segment area to start
    for (let j = 0; j < digitsArray[8].length; j++) {
        ColorSerments(8, j, "rgb(210, 210, 210)");
    } 
    /* if the digit is from 0 to 9 then the segments are colored in red,
    else Error. */ 
    let digit = document.getElementById("number").value;
    if (digit >= 0 && digit <= 9) {
        // loop for coloring in red segments corresponding to the input number
        for (let i = 0; i < digitsArray[digit].length; i++) {
            ColorSerments(digit, i, "rgb(255, 99, 71)");  
        }
    } else {
        alert("Error. Please, enter single digit!");
    }     
}

// the function that colors segments 
function ColorSerments(digit, i, color) {
    ctx.fillStyle = color; 
    switch(digitsArray[digit][i]) {
        case "A":
            ctx.fillRect(100, 20, 70, 10);
            break;
        case "B":
            ctx.fillRect(170, 30, 10, 70);;
            break;
        case "C":
            ctx.fillRect(170, 110, 10, 70);
            break;
        case "D":
            ctx.fillRect(100, 180, 70, 10);
            break;
        case "E":
            ctx.fillRect(90, 110, 10, 70);
            break;
        case "F":
            ctx.fillRect(90, 30, 10, 70);
            break
        case "G":
            ctx.fillRect(100, 100, 70, 10);
            break;
        case "Dot":
            ctx.fillRect(190, 180, 10, 10);
            break;
    }
}
        