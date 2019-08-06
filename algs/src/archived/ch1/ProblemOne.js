class ProblemOne{

    //Implement an algorithm to determine if a string has all unique characters in it.

    /*Bruteforce: Select first index. Select index+1 and compare each to first index.  O(N^2)
    for(i in string)
        for(j=i+1 in string)
            if j === i
                return false
             
        return true
        
        
    */


    /*
        Better solution: O(N)
        for each value
            if(value does not exist in map){
                Store index and value in a map.
                return true
            else{
                return false
            }
        }
       

    */
    constructor(word){
        this.word = word;
    }

    hasAllUniqueChars(){ //returns T or False
        let map = new Map();

        for(let i=0; i < this.word.length; i++){
            if(map.has(this.word.charAt(i)))
                return false; 
            else{
                map.set(this.word.charAt(i), i);
            }
        }
        return true;
    }
}

export default ProblemOne;
