function Node(value){
    this.val = value;
    this.next = null;
}
function SLQueue(){
    this.head = null;
    this.tail = null;
    this.enqueue = function(value){
        new_node = new Node(value);
        if (!this.head){
            this.head = new_node;
            this.tail = new_node;
        }
        else {
            this.tail.next = new_node;
            this.tail = new_node;
        }
        return this;
    }
    this.display = function(){
        var arr = [];
        var runner = this.head;
        while (runner){
            arr.push(runner.val);
            runner = runner.next;
        }
        return arr;
    }
    this.dequeue = function(){
        oldHead = this.head.val;
        this.head = this.head.next
        return oldHead 
    }
    this.contains = function(value){
        var runner = this.head
        while(runner){
            if (runner.val == value){
                return true;
            }
            runner = runner.next
        }
        return false;
    }
}
var squeue = new SLQueue();
squeue.enqueue(1);
squeue.enqueue(2);
squeue.enqueue(3);
console.log(squeue.display());
console.log(squeue.dequeue());
console.log(squeue.display());
console.log(squeue.contains(0));
console.log(squeue.contains(3));
console.log(squeue.contains(2));

function arrStack(){
    var arr = [];
    this.top = arr[arr.length-1];
    this.push = function(value){
        arr.length++;
        arr[arr.length-1] = value;
        this.top = arr[value];
        return this;
    }
    this.pop = function(){
        var temp = this.top;
        arr.length--;
        this.top = arr[arr.length-1];
        return temp;
    }
}

astack = new arrStack();
astack.push(7);
astack.push(8);
astack.push(6);
astack.push(3);
console.log(astack.pop());
console.log(astack.pop());
console.log(astack.pop());
console.log(astack.pop());

function SLStack(){
    this.top = null;
    this.push = function(value){
        new_node = new Node(value);
        if (!this.top){
            this.top = new_node;
        }
        else {
            new_node.next = this.top;
            this.top = new_node;
        }
        return this;
    }
    this.pop = function(){
        var value = this.top.val;
        this.top = this.top.next; 
        return value;
    }
    this.display = function(){
        var arr = [];
        var runner = this.top;
        while (runner){
            arr.push(runner.val);
            runner = runner.next;
        }
        return arr;
    }
    this.contains = function(value){
        var runner = this.top
        while(runner){
            if (runner.val == value){
                return true;
            }
            runner = runner.next
        }
        return false;
    }
}

stack = new SLStack();
stack.push(1);
stack.push(5);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
stack.push(7);
console.log(stack.pop());
console.log(stack.display());
console.log(stack.contains(0));
console.log(stack.contains(5));
console.log(stack.contains(1));
console.log(stack.contains(3));