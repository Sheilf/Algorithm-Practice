


//StringBuilder is a simple data structure that concatenates strings for you using a loop.
class  StringBuilder{

    constructor(){
        this.words = ""; 
    }

    joinWords(list_of_words){
        let sentence = "";
        for(let word in list_of_words){
            sentence = sentence + list_of_words[word] + " ";
        }
        
        return sentence;

    }

}

export default StringBuilder;