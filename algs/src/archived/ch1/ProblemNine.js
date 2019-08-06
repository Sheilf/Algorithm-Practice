class ProblemNine{

    //check if s2 is a rotation of s1
    //only one call of isSubstring
    //ex: waterbottle -> erbottlewat
    constructor(s1, s2){
        this.s1 = s1;
        this.s2 = s2;
    }

    isSubString(s1s1, s2){
        if(s1s1.includes(s2))
            return true
        else
            return false;

    }
    rotateString(){
        let length = this.s1.length;
        
        //base check
        if(length == this.s2.length && this.s1.length > 0){
            let s1s1 = this.s1+this.s1;
            return this.isSubString(s1s1, this.s2);
        }

        return false;
    }

}


export default ProblemNine;