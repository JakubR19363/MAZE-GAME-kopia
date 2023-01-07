






function index(i,j){
    if(i<0 || j<0 || i>COLUMS-1 || j>ROWS-1){
        return -1;
    } 
    return i + j * COLUMS;
}

function drawMaze(){
    stroke('white');
    for(let i=0;i<grid.length;i++){
        grid[i].show();
    }
    
    stroke(0, 153, 51);
    line(539,539,599,599);
    line(539,600,600,539);
}

function generateMaze(){
    do{
        cur.visited = true;

        var next = cur.hceckNeighbors();
        if(next){
            next.visited = true;
            stack.push(cur);

            removeWall(cur,next);

            cur = next;
        }else if(stack.length>0){
            cur = stack.pop();
        }
    }while(stack.length>0);
}

function removeWall(a,b){
    var x = a.i - b.i;
    if (x === 1){
        a.walls[3] = false;
        b.walls[1] = false;
    }else if (x === -1){
        a.walls[1] = false;
        b.walls[3] = false;
    }

    var y = a.j - b.j;
    if (y === 1){
        a.walls[0] = false;
        b.walls[2] = false;
    }else if (y === -1){
        a.walls[2] = false;
        b.walls[0] = false;
    }
}






