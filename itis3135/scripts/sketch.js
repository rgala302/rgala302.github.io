function setup() {
    let canvas = createCanvas(900, 600);
    canvas.parent('canvas-container');
    background(240); 
}

function draw() {
    if (mouseIsPressed) {
        let r = map(mouseX, 0, width, 0, 255);
        let b = map(mouseY, 0, height, 0, 255);
        fill(r, 100, b);
        noStroke();
        
        ellipse(mouseX, mouseY, 20, 20);
    }
}

function keyPressed() {
    if (key === ' ') {
        background(240);
    }
}