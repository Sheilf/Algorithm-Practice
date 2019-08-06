class ProblemSix{

    constructor(string){
        this.string = string;
    }

    compressString(){
        //count repeating characters
        // aabcccccaaa -> a2b1c5a3
        let prev_char =""
        let compress = "";
        let current_consecutive = 1;
        let new_current = false;
        for(let i = 0; i < this.string.length; i++){
            let curr = this.string.charAt(i);

            if(i ==0){
                prev_char = curr;
               
            }else if(curr === prev_char){
                current_consecutive++;
            }else{
                compress += prev_char+current_consecutive;
                prev_char = curr;
                current_consecutive = 1;

                console.log("NEW PREV: "+prev_char);
            }

            

            

            



        } //end for
        compress += prev_char + current_consecutive;
        console.log(compress);
    } // end compress string
}

export default ProblemSix;