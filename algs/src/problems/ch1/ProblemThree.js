/*
    Write a method to replace all spaces in a string with %20. You are granted the true length of the string.
    The trailing white space wont be counted in the length;
    example: input: ("Mr John Smith    ", 13) => "Mr%20John%20Smith"


    Since you're afforded the luxury of the true length of the screen, it's easier to perform without using string methods.
    Otherwise you can dosomething like this

    string.trim(" ").split(" ").join("%20")
    or
    string.replace(some regex that I need to examine)
    
*/

let ProblemThree = (url, url_length) =>{
    let result = ""
    for(let i = 0; i < url_length; i++){
        url.charAt(i) === " " ? result += "%20" : result += url.charAt(i);
    }   
    return result;
    
}

export default ProblemThree;

/*
    let split_array = url.trim(" ").split(" ");
    let result = "";
    for(let i = 0; i < split_array.length; i++){
        if(i < split_array.length - 1)
            result += (split_array[i]+ "%20")
        else
            result += split_array[i]

    }

        return result;
*/