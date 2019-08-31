

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

        Hello world


      </div>
    );
  }
}

export default App;

