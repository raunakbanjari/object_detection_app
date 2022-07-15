img = "";
stats = "";
objects = [];


function setup(){
    canvas = createCanvas(380,380);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.size(380 , 380);
    video.hide();
    

}

function draw(){
    image(video , 0 , 0 , 380 , 380);

    if(stats != ""){
        objectDetector.detect(video , gotResults);

        r = random(255);
        g = random(255);
        b = random(255);

        for (i = 0; i < objects.length; i++){
           document.getElementById("status").innerHTML = "Objects detected";
           document.getElementById("no_of_objects").innerHTML = "Number of objects detected: " + objects.length;
           
           fill(r ,g , b);
           percent = floor(objects[i].confidence * 100);
           text(objects[i].label + " " + percent + "%" , objects[i].x , objects[i].y);
           noFill();
           stroke(r , g , b);
           rect(objects[i].x ,  objects[i].y ,  objects[i].width ,  objects[i].height);
        }
    }

   

}
function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting objects"; 
}

function modelLoaded(){
    console.log("model is loaded");
    stats = true;
    
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