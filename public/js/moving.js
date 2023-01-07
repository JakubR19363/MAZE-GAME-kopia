function move(){
    noStroke();
    ellipse(circleX,circleY,30,30);
    if (keyIsPressed) {
        
        if(onlyOne){
            timeInterval = setInterval(updateTimer, 1000);
            onlyOne=false;
        }

        if (keyCode == 68 && circleX<600) {
            circleX += r; 
        }else if (keyCode == 65 && circleX>10) {
            circleX -= l;
        }else if (keyCode == 87 && circleY>10) { 
             circleY -= t; 
        }else if (keyCode == 83 && circleY<600) { 
            circleY += b;
        }
        checkCollision(keyCode);
    }
}