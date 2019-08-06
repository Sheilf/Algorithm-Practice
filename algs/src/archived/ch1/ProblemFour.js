class ProblemFour{

    //check if string is a permutation of a palindrome
    // atco tac

    //iterate the string
    //set the character into map if it doesnt exist in map
    //if it exists, set match_1to true
    //delete the nodes from the map
    //if map contains only one single
    //and matches
    //it's a palindrome?

    constructor(){

    }

    isPalindromePermutation(string){
        let map = new Map();
        let count = 0;
        for(let i = 0; i < string.length; i++){
            let currChar = string.charAt(i);
            if(currChar === ' ')
                continue
            if(map.has(currChar)){
                map.delete(currChar);
            }else{
                map.set(currChar, true);
            }

            count++
        }

        console.log(map);

        if(count % 2  == 0 ){
            return map.size == 0
        }else{
            return map.size == 1
        }
        
    }


}

export default ProblemFour;