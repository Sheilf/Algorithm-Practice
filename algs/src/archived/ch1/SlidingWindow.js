

class SlidingWindow{

    constructor(){

    }

    operate(string){
        let map = new Map();

        //slide values in
        for(let i = 0; i < string.length; i++){
            let currChar = string.charAt(i);
            if(map.has(currChar)){
                map.set(currChar, map.get(currChar)+1);
            }else{
                map.set(currChar, 1);
            }
       
        }

        let counter = map.size;


        //slide values out
        for(let i = 0; i < string.length; i++){
            let currChar = string.charAt(i);
            if(map.has(currChar)){
                map.set(currChar, map.get(currChar)-1);
                if(map.get(currChar)== 0)
                    counter--;
            }

            console.log("counter", counter);
            console.log(map);
        }

        if(counter == 0 ){

        }
    }   

}

export default SlidingWindow