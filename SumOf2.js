//print true if 2 numbers in the list add up to the sum given

let list = [1,2,3,6];
let sum = 5;
//O(n2)
const solveSum = (list,sum ) => {
    for (let i = 0; i< list.length; i++){
        for (let j = i+1; i< list.length; j++){
            if (list[i] + list[j] ==sum){
                return true;
            }
        }
    }
    return false;
}

//O(n)
const solveSumN = (list, sum ) => {
    leftIndex = 0;
    rightIndex = list.length-1;
    while(leftIndex!== rightIndex){
        if (list[leftIndex] +list[rightIndex]< sum){
            leftIndex++;
        }
        else if (leftIndex+rightIndex){
            rightIndex++;
        }
        else {
            return true;
        }
    }
    return false;
}

//unsorted list

const solveSumSet = (list, sum) => {
    const set = new Set();
    for (let i = 0; i<list.length; i++){
        let diff = sum - list[i];
        if (set.has(diff)){
            return true;
        }
        else {
            set.add(list[i]);
        }
    }
}