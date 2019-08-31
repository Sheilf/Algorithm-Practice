

import React, { Component } from 'react';
import ChapterOne from './ch1/ChapterOne';
import ChapterTwo from './ch2/ChapterTwo';
import ChapterThree from './ch3/ChapterThree';
import ChapterFour from './ch4/ChapterFour';
import ChapterFive from './ch5/ChapterFive';
import ChapterSix from './ch6/ChapterSix';
import ChapterSeven from './ch7/ChapterSeven';
import ChapterEight from './ch8/ChapterEight';
import ChapterNine from './ch9/ChapterNine';
import ChapterTen from './ch10/ChapterTen';
import ChapterEleven from './ch11/ChapterEleven';
import ChapterTwelve from './ch12/ChapterTwelve';
import ChapterThirteen from './ch13/ChapterThirteen';
import ChapterFourteen from './ch14/ChapterFourteen';
import ChapterFifteen from './ch15/ChapterFifteen';




class Chapter extends Component{
    constructor(props){
        super(props);
        this.state = {

        }

    }

    componentDidMount(){
    }
    render(){
        console.log(this.props.match.params.chapterID)

        return(
            <section className="Chapter">
            
            {
                this.props.match.params.chapterID === "chapter-1" ?
                <ChapterOne />
                :
                this.props.match.params.chapterID
            }
            </section>
        )
    }

}
  






export default Chapter;

