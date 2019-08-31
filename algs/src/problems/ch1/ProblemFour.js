let ProblemFour = (string) => {
    let isPalindromePermutation = false;
    let map = new Map();
    let odd_set_counter = 0;


    //populate map
    for(let i=0; i<string.length; i++){
        let curr_key = string.charAt(i);
        map.has(curr_key) ? map.set(curr_key, map.get(curr_key)+1) : map.set(curr_key, 1)        
    }

    for(let [key, val] of map){
        if(val%2 == 1){
            odd_set_counter++
        }
        
    }


    console.log("COUNTER: ", string, odd_set_counter)
    return odd_set_counter < 2;
}

/*
Is the string a permutation of a palindome? 

lloolllooll - 1 even set, 1 odd set   -> T
 
llooolloooll - 2 even sets, 0 odd sets  -> T

lllgggcczllllcczggglll - 4 even sets, 0 odd sets -> T

lllgggcczllrrraaallcczgggll - n even sets, 2! odd sets -> F

l is 10
g is 6
c is 4
z is 2


you have 0 or 1 odd set
you have n amount of even sets 

Create an algorithm to flag these conditions and return a value


*/
export default ProblemFour;