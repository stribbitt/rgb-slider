var rusheaSlider;
var grapeSlider;
var bobbiSlider;

function setup(){
    createCanvas(600,400);
    

    //createSlider(min, max, default)
    rusheaSlider = createSlider(0, 255, 113);
    rusheaSlider.position(20,20);
    grapeSlider = createSlider(0, 255, 0);
    grapeSlider.position(20,40);
    bobbiSlider = createSlider(0, 255 , 80);
    bobbiSlider.position(20,60);
}


function draw(){
    redValue = rusheaSlider.value();
    greenValue = grapeSlider.value();
    blueValue = bobbiSlider.value();
    background(redValue,greenValue,blueValue);
}