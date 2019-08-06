

import React, { Component } from 'react';
import ProblemOne from './ProblemOne';



class ChapterOne extends Component {

  componentDidMount(){



  }


  render() {
    let p1 = new ProblemOne("hello world");
   
    return (
      <div className="ChapterOne chapter">
        <h2>Chapter I</h2>
        {p1.welcome()}
      </div>
    );
  }
}

export default ChapterOne;

