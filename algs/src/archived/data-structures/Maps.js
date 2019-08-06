


import React, { Component } from 'react';

class Maps extends Component {

  componentDidMount(){

/*MAP OPERATIONS*/    
    //1. call a map
    
    let map = new Map();

    //2. add items to a map with .set(key, value);
    map.set('color', 'red');
    console.log(map);
    map.set('age', 2);
    console.log(map);

    //3. get items from a map with .get(key)
    let map_color = map.get('color');
    console.log(map_color);
    let map_age = map.get('age');
    console.log(map_age);

    //delete an item with .delete(key);
    map.delete('color');
    console.log(map);

    map.set('color', 'red');
    console.log(map);

    map.clear();
    console.log(map);

    //contains item by key
    console.log(map.has('color')) //false
    console.log(map.size);
    

    //map is a 2d array?
    //[[],[],[]]
    let course_map = new Map([
      ['color', 'red'], ['owner', 'Sheilfer'], ['age', 24]
    ])
    console.log(course_map);
    

    /*MAP FUNCTIONS */

    //iterate through a map    

    for(let key of course_map.keys()){
      //print each key.
      console.log(key);

    }

    for(let value of course_map.values()){
      //print each value
      console.log(value);
    }   

    for(let [key, value] of course_map){
      //print each key:value
      console.log(key, value);
    }

    //convert map.keys into an array
    let keys_array = [...course_map.keys()]
    console.log(keys_array);

    //convert map.values() into an array.
    let values_array = [...course_map.values()];
    console.log(values_array);

    //test key val array
    //prints out a 2D array 
    let pairs = [...course_map];
    console.log(pairs);



    
  }
  render() {
    return (
      <div className="Maps">
        Maps 
      </div>
    );
  }
}

export default Maps;
