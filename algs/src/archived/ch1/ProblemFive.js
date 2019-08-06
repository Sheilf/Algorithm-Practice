
class ProblemFive{

    /*
        There are 3 edits that can be performed on the string

        1. insert character
        2. remove character
        3. replace character

        write a function to check if they are one or 0 edits away.

        Examples:

        pale, ple -> T
        pales, pale -> T
        pale, bale -> T
        pale, bae -> F
    */

    //Pattern noticed. n-1 || n characters must match in order for it to be 0 || 1 changes away.

    constructor(){

    }

    
    checkChanges(s1, s2){
        //assume lengths are valid
        console.log("Starting...")
        let match_count = 0;
        let s1_map = new Map();
        let s2_map = new Map();
        for(let i = 0; i < s1.length; i++){
            s1_map.set(s1.charAt(i), i);
        }
        for(let i=0; i < s2.length; i++){
            s2_map.set(s2.charAt(i), i)
        }


        console.log(s2_map);
        for(let i = 0; i < s1.length; i++){
            let currChar = s1.charAt(i)
        
            if(s2_map.has(currChar)){
                match_count++;
        
                s2_map.delete(currChar);
        

            }
        }

        if(s2_map.size == 1 || s2_map.size == 0){
             //include -1 if the arguments are two way binding. 
            //if its one way: your approach will work. Does s1 
            return true;
        }else{
            return false //not valid
        }
    }

}   

export default ProblemFive;