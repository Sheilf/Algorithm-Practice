

import React, { Component } from 'react';
import './App.css';
import ChapterNav from './layout/ChapterNav';
import Home from './Home/Home';
import About from './About/About'
import ChapterOne from './problems/ch1/ChapterOne';
import ChapterTwo from './problems/ch2/ChapterTwo';
import ChapterThree from './problems/ch3/ChapterThree';
import ChapterFour from './problems/ch4/ChapterFour';
import ChapterFive from './problems/ch5/ChapterFive';
import ChapterSix from './problems/ch6/ChapterSix';
import ChapterSeven from './problems/ch7/ChapterSeven';
import ChapterEight from './problems/ch8/ChapterEight';
import ChapterNine from './problems/ch9/ChapterNine';
import ChapterTen from './problems/ch10/ChapterTen';
import ChapterEleven from './problems/ch11/ChapterEleven';
import ChapterTwelve from './problems/ch12/ChapterTwelve';
import ChapterThirteen from './problems/ch13/ChapterThirteen';
import ChapterFourteen from './problems/ch14/ChapterFourteen';
import ChapterFifteen from './problems/ch15/ChapterFifteen';


class App extends Component {

  constructor(){
    super();
    this.state={
     curr_chapter: "chapter-1",

    }
    this.navigateChapter = this.navigateChapter.bind(this);
  }

  componentDidMount(){



  }

  navigateChapter(event){

  }


  render() {
    // alert(this.state.curr_chapter)
    return (
      <div className="App">

          JS Code Sessions

          <div>
            1. Pub Sub Implementation

            This one is tough if you have not thought about observables in JS, but it goes into nice topics
            that you'll discover through JS prototypes, design patterns, and the general paradigm.

            In a nutshell, the observable pattern is delegates events and args with .call() &amp; .apply() to a subscription and publishing messaging model.<br/>
          </div>
          <div>
            2. Hacker News API

            work with webAPI to fetch a 
            apiURL
              each .idURL
                .title === 'companyA'
          </div>
          <div>
            3.  Reverse String

            Multiple ways!
          </div>

          <div>
            4. Synchronize an Async function 

            async await it with a new Promise()
          </div>

          <div>
            DFS Post Order

            TreeNode Object

            Left Right Visit
            
          </div>


      </div>
    );
  }
}

export default App;

