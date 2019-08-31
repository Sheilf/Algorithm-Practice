let ProblemSix = (string)=>{
    let compression="";
    let counter = 1;
    let curr_char = string.charAt(0);
    let curr_in = 0;

    while(curr_in < string.length){
        let pointer = curr_in + 1;
        if(string.charAt(pointer)===curr_char){
            counter++
        }else{
            compression+= curr_char+counter;
            counter = 1;
            curr_char = string.charAt(pointer);
        }

        curr_in++;

    }

    return compression;
}

export default ProblemSix;
