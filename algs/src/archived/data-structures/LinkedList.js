import { throws } from "assert";


class Node{
    constructor(node){
        this.node = node;
        this.next = null;
    }
}



/*
    LinkedList interface

    add(node)
    insertAt(node, index)
    removeFrom(index);
    removeNode(node);

    Helpers
        isEmpty()
        size_of_List
        PrintList


    Main function:

        The main functions you use are simple traversals. 
        You traverse toward the index. or through the entire list.

*/
class LinkedList{

    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(node){
        let newNode = new Node(node);
        let curr;

        //if list is empty ? add new node as head : add node to list
        if(this.head == null){
            this.head = newNode;
        }else{
            //travel to the end of the list and add the new node.
            curr = this.head;
            while(curr.next){
                curr = curr.next;
            }

            curr.next = newNode;

        }

        this.size++;
    }

    insertAt(node, index){
        if(index > 0 && index > this.size){
            //unable to insert at location.
            return false;
        }else{
            //create new node
            let newNode = new Node(node);
            let curr, prev;
            curr = this.head;

            //add to first index
            if(index==0){
                newNode.next = this.head;
                this.head = newNode;
            }else{
                curr = this.head;
                let iterator = 0;
                
                while(iterator < index){
                    iterator++;
                    prev = curr;
                    curr = curr.next;

                }

                newNode.next = curr;
                prev.next = newNode;

            }
            this.size++;

        }
    }

    removeFrom(index){
        if(index > 0 && index > this.size){
            return -1;            
        }else{
            let curr, prev, iterator = 0;
            curr = this.head;
            prev = curr;

            if(index == 0 ){
                this.head = curr.next;
            }else{
                while (iterator < index){
                    iterator++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }
            this.size--;

            return curr.node;
        }

    }


    removeNode(node){
        let curr =  this.head;
        let prev = null;

        while(curr != null) {
            if(curr.node == node){
                if(prev == null) {

                    this.head=curr.next;
                }else{prev.next = curr.next}
            
                this.size--;

                return curr.node;
            }

                prev= curr;
                curr= curr.next

        }
   
        return -1;
    }


    indexOf(node){
        let count = 0;
        let curr = this.head;
        while(curr != null){
            if(curr.node == node){
                return count;
            }
            count++
            curr =curr.next;
        }

        return -1
    }

    isEmpty(){
        return this.size==0;
    }

    sizeOfList(){
        console.log(this.size);
    }

    printList(){
        let curr = this.head;
        let string = "";
        while(curr){
            string += curr.node+" ";
            curr = curr.next;
        }
        console.log(string);
    }

    
    
}

export default LinkedList;