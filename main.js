img = "";
stats = "";


function setup(){
    canvas = createCanvas(800,450);
    canvas.center();
    background("white");
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting objects"; 

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

    fill("red");
    text("CAT" , 390 , 100);
    stroke("red");
    noFill();
    rect(330 , 70 , 400 , 370);
}

function modelLoaded(){
    console.log("model is loaded");
    stats = true;
    objectDetector.detect(img , gotResults);
}
function gotResults(error , results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }

}