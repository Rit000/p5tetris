function setup() {
    createCanvas(400, 600);
}
let field = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],]

var left_clicking, right_clicking = false;
function mousePressed() {
    if (mouseButton == LEFT) {
        left_clicking = true;
    }
    if (mouseButton == RIGHT) {
        right_clicking = true;
    }
}
function mouseReleased() {
    if (mouseButton == LEFT) {
        left_clicking = false;
    }
    if (mouseButton == RIGHT) {
        right_clicking = false;
    }
}


function draw() {
    stroke(192);
    background(255);
    if (left_clicking) {
        field[parseInt(mouseY / 30)][parseInt(mouseX / 30)] = 8;
    }
    if (right_clicking) {
        field[parseInt(mouseY / 30)][parseInt(mouseX / 30)] = 0;
    }
    for (var i = 0; i < 20; i++) {
        for (var j = 0; j < 10; j++) {
            if (field[i][j] == 8) { fill(255); } else { fill(0); }
            rect(j * 30, i * 30, 30, 30);
        }
    }
}