function Node(value){
    this.val = value;
    this.next = null;
}
function Llist(){
    this.head = null;
    this.add = function(val){
        var new_node = new Node(val);
        if (this.head == null){
            this.head = new_node;
        }
        else {
            var runner = this.head;
            while (runner.next){
                runner=runner.next;
            }
            runner.next = new_node;
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
    this.addFront = function(val){
        new_node = new Node(val);
        if (this.head == null){
            this.head = new_node;
        }
        new_node.next = this.head;
        this.head = new_node;
        return this;
    }
    this.removeFront = function(){
        if (this.head == null){
            return false;
        }
        this.head = this.head.next;
        return this;
    }
    this.insertAfter = function(prev,val){
        new_node = new Node(val);
        runner = this.head;
        while(runner.val != prev){
            runner = runner.next;
        }
        oldPoint = runner.next;
        runner.next = new_node;
        new_node.next = oldPoint;
        return this;
    }
    this.insertBefore = function(prev,val){
        new_node = new Node(val);
        runner = this.head;
        while(runner.next.val != prev){
            runner = runner.next;
        }
        oldPoint = runner.next;
        runner.next = new_node;
        new_node.next = oldPoint;
        return this;
    }
    this.contains = function(value){
        runner = this.head;
        while(runner){
            if (runner.val == value) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
    this.leng = function(){
        runner = this.head;
        var count = 0;
        while(runner){
            runner = runner.next;
            count++;
        }
        return count;
    }
    this.min = function(){
        runner = this.head.next;
        var min = this.head.val;
        while (runner){
            if (runner.val<min){
                min = runner.val;
            }
            runner = runner.next;
        }
        return min;
    }
    this.max = function(){
        runner = this.head.next;
        var max = this.head.val;
        while (runner){
            if (runner.val>max){
                max = runner.val;
            }
            runner = runner.next;
        }
        return max;
    }
    this.avg = function(){
        runner = this.head.next;
        var avg = this.head.val;
        while (runner){
            avg += runner.val
            runner = runner.next;
        }
        return avg/this.leng();
    }
    this.removeBack = function(){
        runner = this.head;
        while (runner.next.next){
            runner = runner.next;
        }
        runner.next = null;
    }
    this.removeVal = function(val){
        runner = this.head;
        while(runner.next.val != val){
            runner = runner.next;
            if (!runner.next){
                return false;
            }
        }
        runner.next = runner.next.next;
        return this;
    }
    this.moveMin = function(){
        var runner = this.head;
        var value = this.min();
        if (this.head.val == value) {
            return this;
        }
        while(runner.next.val != value){
            runner = runner.next;
            if (!runner.next){
                break;
            }
        }
        var newFront = runner.next;
        runner.next = runner.next.next;
        newFront.next = this.head;
        this.head = newFront;
        return this;
    }
    this.moveMax= function(){
        var runner = this.head;
        var value = this.max();
        while(runner.next.val != value){
            runner = runner.next;
            if (!runner.next){
                break;
            }
        }
        var newBack = runner.next.val;
        runner.next = runner.next.next;
        this.add(newBack);
        return this;
    }
    this.removeNegatives= function(){
        while (this.head.val <0){
            this.head = this.head.next;
        }
        var runner = this.head;
        while (runner.next){
            if (runner.next.val <0){                
                runner.next = runner.next.next;
            }
            else{
            runner = runner.next;
            }
        }
    }
}
function isPal(list){
    var runner = list.head, runner2;
    if (!runner.next){
        return true;
    }
    if (!runner.next.next){
        if (runner.val == runner.next.val){
            return true;
        }
        else {
            return false;
        }
    }
    while (runner){
        if (!runner.next){
            return true;
        }
        runner2 = runner.next;
        while (runner2.next){
            if (!runner2.next.next){
                if(runner.val == runner2.next.val){
                    runner = runner.next;
                    runner2.next = null;
                }
                else{
                    return false;
                }
            }
            else {
                runner2 = runner2.next;
            }
        }
    }
}
var slist = new Llist();
slist.add(1);
slist.add(3);
slist.add(1);
slist.add(2);
slist.add(1);
slist.add(3);
slist.add(1);

console.log(slist.display())
console.log(isPal(slist));

var slist1 = new Llist();
slist1.add(1)
console.log(slist1.display())

console.log(isPal(slist1));

var slist2 = new Llist();
slist2.add(1)
slist2.add(1)
console.log(slist2.display())

console.log(isPal(slist2));
slist2.removeBack()
slist2.add(2)
console.log(slist2.display())

console.log(isPal(slist2));



var slist3 = new Llist();
slist3.add(1);
slist3.add(2);
slist3.add(3);
slist3.add(2);
slist3.add(1);
console.log(slist3.display())

console.log(isPal(slist3));

