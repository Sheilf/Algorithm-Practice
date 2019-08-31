//Determine what edit is present
//If the lengths are equal, search if there are more than one edit
//If the lengths are off by 1, use a dynamic index to search for letter equality (the main problem)

let ProblemFive = (s1, s2) => {
    if(Math.abs(s1.length - s2.length) > 1)
        return false;
    
    let smallest = s1.length > s2.length ?  s2 : s1
    let largest = s1.length > s2.length ? s1 : s2

    let i_smallest = 0;
    let i_largest = 0;
    let differenceIsFound =  false;

    while(i_largest < largest.length && i_smallest < smallest.length){
        if(smallest.charAt(i_smallest) != largest.charAt(i_largest)){ //if different
            //difference is activated ++
            if(differenceIsFound) return false //catch: found a > 1 difference 
            differenceIsFound = true //difference is initialized
            if(smallest.length == largest.length) //sizes are equal: you're finding replace edits. Move the shorter pointer
                i_smallest++
            
        }else // not different
            i_smallest++; //if matching, move shorter pointer
        
        i_largest++; //always move larger pointer
    }

    return true; //case pased.

}

/*


*/



export default ProblemFive;



