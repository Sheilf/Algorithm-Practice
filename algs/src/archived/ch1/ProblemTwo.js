class ProblemTwo{

    //Problem: Given two strings, write a method to decide if one is a permuation of the other.
    // ABC = ACB CAB CBA ABC, etc



        
    
    constructor(){

    }

    toCharArray(string){
        return string.split("").sort();
    }

    isPermutation(s1, s2){
        if(s1.length != s2.length){
            return false;
        } 
        let s1_chars = this.toCharArray(s1);
        let s2_chars = this.toCharArray(s2);
        

        s1 = JSON.stringify(s1_chars);
        s2 = JSON.stringify(s2_chars);

        console.log(s1);
        console.log(s2)

        //in Java we would use s1_chars.equals(s2_chars)
        //but in javasript we gotta get a little funkier..

        return s1 === s2
    }

    isMapPermutation(s1, s2){
        if(s1.length != s2.length)
            return false
        
        let s1_chars = this.toCharArray(s1);
        let s2_chars = this.toCharArray(s2);

        let map = new Map();

        for(let i = 0; i < s1_chars.length; i++){
            
            

        }


    }


}

export default ProblemTwo;


    //return boolean
    // isPermutation(string_one, string_two){
    //     //Cases: When letters are not all unique use map.delete when matched.
    //     let match = 0;
    //     let string_one_map = new Map();

    //     if(string_one.length == string_two.length){

    //         for(let i = 0; i < string_one.length; i++){
    //             string_one_map.set(string_one.charAt(i), i);
                
    //         }
    //         for(let i = 0; i < string_one.length; i++){
    //             if(string_one_map.has(string_two.charAt(i)))
    //                 match++;
    //             else{
    //                 return false;
    //             }
    //         }
    //         if(match == string_two.length)
    //             return true;


    //     }else{
    //         return false; // ABCD != ABC
    //     }

    // }