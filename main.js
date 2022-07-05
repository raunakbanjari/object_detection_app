img = ""

function setup(){
    canvas = createCanvas(800,450);
    canvas.center();
    background("white");
}
function preload(){
   img = loadImage("dog_cat.jpg");
}

function draw(){
    image(img , 0 , 0 , 800 , 450);
    fill("red");
    text("DOG" , 75 , 60);
    stroke("red");
    noFill();
    rect(70 , 40 , 350 , 370);

}