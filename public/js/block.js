function Block(i,j){
    var X;
    var Y;
    this.i=i;
    this.j=j;
    this.walls = [true, true, true, true];
    this.visited = false;

    this.hceckNeighbors = function(){
        var neighbors = [];
        

        var top = grid[index(i,j-1)];
        var right = grid[index(i+1,j)];
        var bottom = grid[index(i,j+1)];
        var left = grid[index(i-1,j)];

        if(top && !top.visited){
            neighbors.push(top);
        }
        if(bottom && !bottom.visited){
            neighbors.push(bottom);
        }
        if(right && !right.visited){
            neighbors.push(right);
        }
        if(left && !left.visited){
            neighbors.push(left);
        }

        if(neighbors.length>0){
            var r = floor(random(0,neighbors.length));
            return neighbors[r];
        }else{
            return undefined;
        }
        
    }
    
    this.show = function(){
        let x= this.i*w;
        let y=this.j*w;
        this.X=x;
        this.Y=y;
        stroke(255);
        if(this.walls[0])
            line(x,y,x+w,y);
        if(this.walls[1])
            line(x+w,y,x+w,y+w);
        if(this.walls[2])
            line(x+w,y+w,x,y+w);
        if(this.walls[3])
            line(x,y+w,x,y);
    }

    
}