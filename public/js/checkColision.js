function checkCollision(code){
    t = deltaTime / SPEED;
    b = deltaTime / SPEED;
    r = deltaTime / SPEED;
    l = deltaTime / SPEED;

    for(let i = 0 ;i<grid.length;i++){
            
        switch(code){
            case 87:
                if(grid[i].walls[0] && collideLineCircle(grid[i].X, grid[i].Y, grid[i].X+w, grid[i].Y, circleX, circleY,30)){
                    t = 0;
                    circleY+=3;
                }
                if(grid[i].walls[1] && collideLineCircle(grid[i].X+w, grid[i].Y, grid[i].X+w, grid[i].Y+w, circleX, circleY, 30)){
                    t = 0;
                    //circleY+=2;
                }
                if(grid[i].walls[3] && collideLineCircle(grid[i].X, grid[i].Y+w, grid[i].X, grid[i].Y, circleX, circleY, 30)){
                    t=0;
                    //circleY+=2;
                }
                break;
            case 65:
                if(grid[i].walls[3] && collideLineCircle(grid[i].X, grid[i].Y+w, grid[i].X, grid[i].Y, circleX, circleY, 30)){
                    l=0;
                    circleX+=3;
                }
                if(grid[i].walls[0] && collideLineCircle(grid[i].X, grid[i].Y, grid[i].X+w, grid[i].Y, circleX, circleY,30)){
                    l = 0;
                    //circleX+=2;
                }
                if(grid[i].walls[2] && collideLineCircle(grid[i].X+w, grid[i].Y+w, grid[i].X, grid[i].Y+w, circleX, circleY, 30)){
                    l = 0;
                    //circleX+=2;
                }
                break;
            case 68:
                if(grid[i].walls[1] && collideLineCircle(grid[i].X+w, grid[i].Y, grid[i].X+w, grid[i].Y+w, circleX, circleY, 30)){
                    r = 0;
                    circleX-=3;
                }
                if(grid[i].walls[0] && collideLineCircle(grid[i].X, grid[i].Y, grid[i].X+w, grid[i].Y, circleX, circleY,30)){
                    r = 0;
                    //circleX-=2;
                }
                if(grid[i].walls[2] && collideLineCircle(grid[i].X+w, grid[i].Y+w, grid[i].X, grid[i].Y+w, circleX, circleY, 30)){
                    r = 0;
                    //circleX-=2;
                }
                break;
            case 83:
                if(grid[i].walls[2] && collideLineCircle(grid[i].X+w, grid[i].Y+w, grid[i].X, grid[i].Y+w, circleX, circleY, 30)){
                    b = 0;
                    circleY-=3;
                }
                if(grid[i].walls[1] && collideLineCircle(grid[i].X+w, grid[i].Y, grid[i].X+w, grid[i].Y+w, circleX, circleY, 30)){
                    b = 0;
                    //circleY-=2;
                }if(grid[i].walls[3] && collideLineCircle(grid[i].X, grid[i].Y+w, grid[i].X, grid[i].Y, circleX, circleY, 30)){
                    b=0;
                    //circleY-=2;
                }
                break;
                
        }
        
                
    
}
}