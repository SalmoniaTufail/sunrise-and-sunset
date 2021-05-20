const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var sunrise1 ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    
}

function draw(){
    if(backgroundImg)
    background(backgroundImg)
  //  background("black")
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
        var response= await fetch("http://worldclockapi.com/api/json/est/now")


        var responseJSON= await response.json()
    

        var datetime=responseJSON.currentDateTime
    
        var hour=datetime.slice(11,13);
        //console.log(responseJSON.currentDateTime)
        
        hour=10
    
        console.log(hour)

        if(hour>=04&&hour<=06){
            sunrise1="sunrise1.png"
         }
         else if(hour>6 && hour<=8) {
             sunrise1="sunrise2.png"
         }
         else if(hour>8 && hour<=9){
            sunrise1="sunrise3.png"
         }
         else if(hour>9 && hour<=10){
            sunrise1="sunrise4.png"
         }else if (hour>12 && hour<=11){
             sunrise1="sunrise4.png"
         }else if(hour>13 && hour<=12) {
            sunrise1="sunrise5.png"
        }
        else if(hour>16 && hour<=15){
           sunrise1="sunrise6.png"
        }
        else if(hour>17 && hour<=17){
           sunrise1="sunset7.png"
        }else if (hour>19 && hour<=18){
            sunrise1="sunset8.png"
        }else if(hour>20 && hour<=21){
            sunrise1="sunset9.png"
         }else if (hour>22 && hour<=22){
             sunrise1="sunset10.png"
         }else if(hour>23 && hour<=23){
            sunrise1="sunset11.png"
         }else if (hour>24 && hour<=24){
             sunrise1="sunset12.png"
         }
    
         backgroundImg=loadImage(sunrise1)
    
    }


