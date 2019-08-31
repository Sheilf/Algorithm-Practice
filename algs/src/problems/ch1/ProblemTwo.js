/*
1.2
Given two strings, write a method to decide if one is a permutation of another

A permutation is the same letters being used in the same string in a different order
cat is a permutation of tac
oat is not a permutation of oatmilk


if s1 and s2 are not the same length; return false
First pass: Map out s1 an s2
Do a second pass: if there is a match, increase match counter, remove that key

if match counter is the same, return true
else return false
*/

class ProblemTwo{

    constructor(s1, s2){
        this.s1 = s1;
        this.s2= s2;
    }

    checkPermutation(){
        if(this.s1.length != this.s2.length)
            return false

        let s1_map = new Map();
        let s2_map = new Map();

        for(let i = 0; i < this.s1.length; i++){
            let curr_1 = this.s1.charAt(i);
            let curr_2 = this.s2.charAt(i);

            if(s1_map.has(curr_1))
                s1_map.set(curr_1, s1_map.get(curr_1)+1)
            else if(s2_map.has(curr_2))
                s2_map.set(curr_2, s2_map.get(curr_2)+1)
            else{
                s1_map.set(curr_1, 1)
                s2_map.set(curr_2, 1)
            }

            
        }

        let final_counter= this.s1.length;

        for(let i = 0; i < this.s1.length; i++){
            let curr = this.s1.charAt(i);
            if(s1_map.has(curr) && s2_map.has(curr)){
                if(s1_map.get(curr) == 1){
                    s1_map.delete(curr)
                    s2_map.delete(curr);
                    final_counter = final_counter -1;
                }else{
                    s1_map.set(curr, s1_map.get(curr)-1);
                    s2_map.set(curr, s2_map.get(curr)-1)
                }
            }

        }
        console.log(final_counter)
        if(final_counter==0)
            return true
        else
            return false
        

    }
}

export default ProblemTwo;