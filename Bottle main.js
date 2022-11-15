function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();

}

function preload(){
img = loadImage('1.jpg');

}

function draw(){
image(img, 0, 40, 540, 320);
}