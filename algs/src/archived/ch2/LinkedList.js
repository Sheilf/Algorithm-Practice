class Node{
    constructor(data){
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(data){
        let new_node = new Node(data);
        let curr;

        if(this.head==null){
           this.head = new_node;
        }else{
            curr = this.head;
            while(curr.next){
                curr = curr.next;
            }

            curr.next = new_node;
            curr.prev = curr;

        }

        this.size++;
    }

    remove(data){
        let curr = this.head;

        if(curr.data == data)
            return this.head.next;
        
        while(curr.next){
            if(curr.next.data == data){
                curr.next = curr.next.next;
                this.size--;
                return this.head;
            }
            curr = curr.next;
        }

        return this.head;
    }

    printList(){
        let curr = this.head;
        while(curr){
            console.log(curr.data);
            curr = curr.next

        }
    }

    removeDuplicates(){
        let curr = this.head;
        let prev = null;

        let map = new Map();
        
     


        while(curr){
            
            if(map.has(curr.data)){                                                                                                                                                
                curr = prev;
                curr.next = curr.next.next;
                this.size--;
            }else{
                map.set(curr.data, 1)
            }

            prev = curr;
            curr = curr.next;
        }

    }

    kthToLast(k){

        //TRIVIAL SOLUTION, size is known.
        let size = this.size;
        let curr = this.head;
        let position = size - k;
        let count = 0;

        if(k > size){
            console.log("not valid")
            return;
        }
  
        while(curr){

            if(count == position){
                return curr.data
            }
            curr = curr.next;
            count++;

        }

        return curr.data;
       
    }


    kthToLastRecurvsive(head, k){
        if(head == null){
            return 0; //(0+1) = 1
        }

        let index = this.kthToLastRecurvsive(head.next, k) + 1;
        if(index == k+1){
            console.log("index found", k, "elements away")
            console.log("data", head.data);

        }
        return index; //(1+1) = 2, (2+1) = 3, (3+1) = 4, (n+1) = k

    }

    kthToLastIterative(head, k){
        let p1 = head;
        let p2 =  head;

        //finger method
        // move p1 k nodes into the list

        for(let i = 0; i < k; i++){
            if(p1 == null) return null;
            p1 = p1.next;
        }

       //move at same time: when p1 reaches end, p2 is in position
        while(p1 != null){
            p1 = p1.next;
            p2 = p2.next;
        }

        return p2;
    }

    deleteNode(node){
        if(node == null || node.next == null)
            return false;
        
        let next = node.next;
        node.data = next.data;
        node.next = next.next;
        return true;
        

    }

    sortByPartition(head, x){

        let left_list = new LinkedList();
        let right_list = new LinkedList();
        let curr = head;

        while(curr){
            if(curr.data < 6){
                left_list.add(curr.data);

            }else{
                right_list.add(curr.data);
            }
            curr=curr.next;
        }


        let right_list_curr = right_list.head;

        while(right_list_curr){
            left_list.add(right_list_curr.data);
            right_list_curr = right_list_curr.next;
        }
        return left_list;
    }




    sumLists(list_1, list_2){


        let ans = new LinkedList();
        let c1 = list_1.head;
        let c2 = list_2.head;


        let carry = 0;


        while(c1){
            let curr_sum = 0;
            if(carry > 0){
                curr_sum = 1;
                carry = 0;
            }

            curr_sum += c1.data+c2.data;
            if(curr_sum > 9){
                curr_sum = curr_sum - 10;
                carry = 1;

            }

            ans.add(curr_sum);
            c1 = c1.next;
            c2 = c2.next;

        }

        return ans;

        

    }

    sumListsForward(list_1, list_2){
 

        let ans = new LinkedList();
        let c1 = list_1.head;
        let c2 = list_2.head;

        let stack = [];
        let carry = 0;
        let count = list_1.size;

        while(c1.next){
            //walk to back
            c1.prev = c1;
            c1 = c1.next;
            
            c2.prev = c2;
            c2 = c2.next;

        }
        console.log(count, " count");
       
        while(c1){
            let curr_sum = 0;
            if(carry > 0){
                curr_sum = 1;
                carry = 0;
            }

            curr_sum += c1.data+c2.data;
            if(curr_sum > 9){
                curr_sum = curr_sum - 10;
                carry = 1;

            }

            stack.push(curr_sum);
            
            
            c1 = c1.prev;
            c2 = c2.prev;


            count--;

 

        }

        for(let i = 0; i < stack.length; i++){
            ans.add(stack.pop())
        }

        return ans;
    }

}


export default LinkedList;