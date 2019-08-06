let hash = require('string-hash');

class SimpleMap{


    constructor(){
        this.map = []
    }

    get(key){
    //    let key_value;
    //    this.map.forEach(pairs =>{
    //        if(pairs[0] == key)
    //            key_value = pairs[1];
    //    })

    //    return key_value;

       return this.map[hash(key)];
    }

    set(key, val){
        // this.map.push([key,val])
        this.map[hash(key)] = val;
    }
}

export default SimpleMap;