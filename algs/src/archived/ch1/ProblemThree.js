class ProblemThree{
    //URLify
    /*
    Write a method to replace spaces in a string with %20.

    Input: "Mr John Smith      ", 13
    Output: "Mr%20John%Smith"

    */

    constructor(){

    }


    URLify(input){
        //input.split = [Mr, John, Smith, ' ', ' ', ' ',' ' ];
        let input_split = input.trim().split(" "); //[Mr, John, Smith]
        let output="";

        for(let i = 0; i < input_split.length; i++){
            if(i == input_split.length - 1){
                output += input_split[i];
            }else{
                output += input_split[i]+"%20";
            }   
        }

        return output;

    }
  

}

export default ProblemThree;