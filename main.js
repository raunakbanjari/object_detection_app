img = "";
stats = "";
objects = [];


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

    if(stats != ""){
        for (i = 0; i < objects.length; i++){
           document.getElementById("status").innerHTML = "Objects detected";
           
           fill("red");
           percent = floor(objects[i].confidence * 100);
           text(objects[i].label + " " + percent + "%" , objects[i].x , objects[i].y);
           noFill();
           stroke("red");
           rect(objects[i].x ,  objects[i].y ,  objects[i].width ,  objects[i].height);
        }
    }

   

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
        objects = results;
    }

}