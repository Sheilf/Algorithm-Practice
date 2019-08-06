

import React, { Component } from 'react';
import './App.css';
import ChapterOne from './problems/ch1/ChapterOne';



class App extends Component {

  constructor(){
    super();
    this.state={
        current_chapter: 1
    }
  }

  componentDidMount(){



  }


  render() {
    return (
      <div className="App">
        {
          this.state.current_chapter == 1 ? 
          <ChapterOne />

          :

          null

        }
      </div>
    );
  }
}

export default App;

