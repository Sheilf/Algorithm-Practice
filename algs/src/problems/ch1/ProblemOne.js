



class ProblemOne{

    constructor(greeting){
        this.greeting = greeting;
    }

    sayHello(name){
        console.log(`${this.greeting}, ${name}`)
    }
}

export default ProblemOne;





































/*
A. Implement an algorithm to determine if a string has all unique characters.
Q. What if you cant use an additional data structure?



A. Use a map. 
if the current value does not exist, store it to the map
if it does exist, return false
if the loop completes, return true


*/

// class ProblemOne{
//     //instance variables should be immutable.
//     constructor(string_value){
//         this.string_value = string_value;
//     }
    
//     isUniqueMap(){
//         let unique_map = new Map();
//         for(let i = 0; i < this.string_value.length; i++){
//             let current_char = this.string_value.charAt(i);
//             if(unique_map.has(current_char))
//                 return false
//             else    
//                 unique_map.set(current_char, i)

//         }
//         return true;
//     }
    
//     isUniqueCharArray(){
//         if(this.string_value.length > 128)
//             return false

//         let char_array = new Array(128);
//         for(let i = 0; i < this.string_value.length; i++){
//             let current_char = this.string_value.charAt(i);
//             if(char_array[current_char])
//                 return false
            
//             char_array[current_char] = true

//         }
//         console.log(char_array);
//         return true

//     }
    


// }
