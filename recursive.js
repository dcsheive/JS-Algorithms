function fib(num){
    if (num<3){
        return 1;
    }
    else {
        return fib(num-1)+fib(num-2);
    }
}
console.log(fib(5));
function fill(arr,x,y,nc,oc){
    arr[x][y] = nc;
    if (arr[x-1][y] == oc){
        arr[x-1][y]=nc;
        return fill(arr,x-1,y,nc,oc); 
    }
    else if (arr[x+1][y]==oc){
        arr[x+1][y]=nc;
        return fill(arr,x+1,y,nc,oc); 
    }
    else if (arr[x][y-1]==oc){
        arr[x][y-1]=nc;
        return fill(arr,x,y-1,nc,oc); 
    }
    else if (arr[x][y+1]==oc){
        arr[x][y+1]=nc;
        return fill(arr,x,y+1,nc,oc); 
    }
    return arr;
}

var canvas = [
    [3,2,3,4,3],
    [2,3,3,4,0],
    [7,3,3,5,3],
    [6,5,3,4,1],
    [1,2,3,3,3]
]
console.log(fill(canvas,2,2,1,3));
