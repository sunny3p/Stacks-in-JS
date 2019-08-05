// Stack class 
// class Stack { 
  
//     // Array is used to implement stack 
//     constructor() 
//     { 
//         this.items = []; 
//     } 
  
//     // Functions to be implemented 
//     // push(item) 
//     // pop() 
//     // peek() 
//     // isEmpty() 
//     // printStack() 
// }

// Stack class
class Stack {

	// Array is used to implement stack 
	constructor(){
		this.items = [];
	}
    // Functions to be implemented
    // number of items in stack
    get length(){
        return this.items.length
    }
    //Get all the elements 
    get stack() {
        return this.items;
    }
    // push function:Adds an element to the stack
     push(element) {
        // push element into the items
        this.items.push(element);
     }
	// pop function: Removes an element from the stack, if the function is call on an empty stack it indicates “Underflow”
    pop(){
        // return top most element in the stack
        // and removes it from the stack
        // Underflow if stack is empty
        if (this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }
	// peek function: returns the top most elements in the stack, but doesn’t delete it.
    peek(){
        // return the top most element from the stack
        // but does'nt delete it.
        return this.items[this.items.length - 1];
    }
	// isEmpty function:return true if the stack is empty
    isEmpty(){
        // return true if stack is empty
        return this.items.length == 0;
    }
        // printStack function: This method returns a string in which all the element of an stack is concatenated.
    printStack(){
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

