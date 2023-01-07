var COLUMS, ROWS;
var w = 60;
var grid = [];
var stack = [];
var cur;
var circleX;
var circleY;
var SPEED;
var t,b,r,l;
let onlyOne;
let timer = document.querySelector('.timer');
let minutes = timer.querySelector('.minutes');
let seconds = timer.querySelector('.seconds');
let count;
let timeInterval;
let submitForm;

function setup(){
    grid.splice(0, grid.length);
    SIZE = 600;
    myCanvas = createCanvas(600,600);
    myCanvas.parent("first");
    COLUMS = floor(width/w);
    ROWS = floor(height/w);
    SPEED = 4;
    //ellipse
    circleX = 30;
    circleY = 30;
    onlyOne = true;
    //timer
    let min;
    let sec;
    count = 0;
    clearInterval(timeInterval);
    minutes.value = '0';
    seconds.value = '0'; 
    document.getElementById('win').innerHTML = "";

    submitForm = true;

 for(let j=0;j<ROWS;j++){
     for(let i = 0;i<COLUMS;i++){
         let block = new Block(i,j);
         grid.push(block);
     }
 }
 cur = grid[0];
 generateMaze();
 t=1;
 b=1;
 r=1;
 l=1;
}

function draw(){
    myCanvas.background(85,85,85);
    drawMaze();
    move();
    checkWin();
}