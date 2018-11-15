
function Node(val){
    this.val = val;   // the value attribute will be assigned based on user input when a node is instantiated
    this.left = null;   // the left attribute will be assigned to a node later
    this.right = null;  // the right attribute will be assigned to a node later
    
}
function BST(){
    this.root = null;    // the root attribute will be assigned to a node later
    BST.prototype.insert = function(val){
        new_node = new Node(val);
        if(!this.root){
            this.root = new_node;
            return this;
        }
        else {
            runner = this.root
            while(runner){
                if(val<runner.val){
                    if (runner.left){
                        runner = runner.left;
                    }
                    else{
                        runner.left = new_node;
                        return this;
                    }
                }
                else if (val>runner.val){
                    if (runner.right){
                        runner = runner.right;
                    }
                    else{
                        runner.right = new_node;
                        return this;
                    }
                }
                else {
                    return this;
                }
            }
        }
    }
}
var first = new BST();      // make an instance of a BST and store it in a variable
first.insert(50).insert(40).insert(60).insert(30).insert(20).insert(35).insert(65).insert(55);
console.log(first);
console.log(first.root.left);
console.log(first.root.right);