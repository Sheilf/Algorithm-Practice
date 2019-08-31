

import React, { Component } from 'react';
import ProblemOne from './ProblemOne';
import ProblemTwo from './ProblemTwo';
import ProblemThree from './ProblemThree';
import ProblemFour from './ProblemFour';
import Problem from '../Problem';
import ProblemFive from './ProblemFive';
import ProblemSix from './ProblemSix';
import ProblemSeven from './ProblemSeven';
import ProblemEight from './ProblemEight';



class ChapterOne extends Component {

  componentDidMount(){
  }

  render() {

    //using classes
    let p1 = new ProblemOne("Aa");
    let p1_test_1 = p1.isUniqueMap();
    let p1_test_2 = p1.isUniqueCharArray();
    let p1_again = new ProblemOne("new park dog")
    let p1_test_3 =  p1_again.isUniqueMap();
    let p1_test_4 = p1_again.isUniqueCharArray();

    let p2 = new ProblemTwo("abc", "cba");
    let p2_again = new ProblemTwo("ccc", "CCC");
    let p2_test_1 = p2.checkPermutation();
    let p2_test_2 = p2_again.checkPermutation();

    let p3 = ProblemThree("Mr John Smith     ", 13);

    // let p6 = ProblemSix("aabcccccaaa");
    //Using functional methods, classes when it's more useful
    
    return (
      <section className="ChapterOne chapter">
        
        <h1 className="chapter-header">I - Arrays &amp; Strings</h1>
        <div style={{width: '100%', textAlign: 'center'}}>
          <h3>Techniques Used</h3>
          <ol>
            <li>Use a map to track occurrences</li> 
            <li>Use a boolean to flag conditions being met multiple times such as duplicates being found</li> 
            <li>Sort strings to determine order or equality</li>
            <li>Use multiple pointers or passes to dynamically process array</li>


          </ol>
        </div>
        <Problem
          title="1.1 Is Unique"
          question="Implement an algorithm to determine if a string has all unique characters. What if you cannot use extra data structures?"
          returns = "true if all characters are unique"
          inputs={["Aa", "new park dog"]}
          outputs={[p1_test_1, p1_test_2, p1_test_3, p1_test_4]}
          outcome_count = "2 per input"
          notes="'new park dog' returns false due to repeated white spaces"
          technique="Use a boolean flag to determine if a char exists in an array."
        />
          
        <Problem
          title="1.2 Check Permutation"
          question="Check if string 1 is a permutation of string 2"
          returns="true if the strings are a permutation of each other"
          inputs={["abc & cba", "ccc & CCC"]}
          outputs={[p2_test_1, p2_test_2]}
          outcome_count= "1 per input"
          notes="ccc & CCC returns false because C and c are different character values"
          technique="Sort strings for equality or use a map to determine equal occurrences"
        />

        <Problem
          title="1.3 URLify"
          question="Write a method to replace all spaces in a string with %20. You are given the true length of the string"
          returns="a modified string"
          inputs={["'Mr John Smith     '"]}
          outputs={[
            ProblemThree("Mr John Smith          '", 13)
          ]}
          outcome_count="1 per input"
          notes="The question grants you the true length of the string. There are many ways to answer this problem."
          technique="Multiple ways to approach this problem: Without built-in methods you will use multiple pointers to determine the appropriate indices."
        />

        <Problem
          title="1.4 Palindrome Permutation"
          question="Determine if a string is a permutation of a palindrome. Assume lowercase letters"
          returns="true or false"
          inputs={["atcoact", "lolol", "llooollooooolloooll","llooolgggaaaloooll"]}
          outputs={[
            ProblemFour("atcoact"),
            ProblemFour("lolol"),
            ProblemFour("llooollooooolloooll"),
            ProblemFour("llooolgggaaaloooll")
          ]}
          outcome_count="1 per input"
          notes="It's really a very simple rule! =)"
          technique="Map out occurrences and use boolean flag"
        />

        <Problem
          title="1.5 One Away"
          question="There are three types of edits performed on this string - insert, remove, and replace a character - Given two strings, write a function to check if they are 1 or 0 edits away"
          returns="True or false"
          inputs={["pale, ple", "pales, pale", "pale, bale", "pale, bake"]}
          outputs={[
            ProblemFive("pale", "ple"),
            ProblemFive("pales", "pale"),
            ProblemFive("pale", "bale"),
            ProblemFive("pple", "bake")
          ]}
          outcome_count = "1 per input"
          technique="Use boolean flag to capture and handle two pointers"
          
          
        />

        <Problem
          title="1.6 String Compression"
          question="Implement a basic string compression on repeating characters"
          returns="A string that compresses repeating letters"
          inputs={["aabcccccaaa"]}
          outputs={[
            ProblemSix("aabcccccaaa")
          ]}
          outcome_count = "1 per input"
          technique="Boolean flag to capture and multiple pointers"
                                                                              
        />

        <Problem
          title="1.7 Rotate Matrix 90deg"
          question="Given an image represented by an NxN matrix, where each pixel is 4 bytes, write a method to rotate the image by 90deg in place."
          returns="A rotated matrix"
          inputs={[
            [0,0,0,0],
            [1,1,1,1],
            [1,0,0,1],
            [1,0,1,0]
          ]}
          outputs={ProblemSeven([
            [0,0,0,0],
            [1,1,1,1],
            [1,0,0,1],
            [1,0,1,0]
          ])}
          outcome_count = "1 per input"
          technique="Matrix technique"
                                                                              
        />

        <Problem
          title="1.8 Zero Matrix"
          question="Convert row and column to 0 when you find an index in a matrix that is 0. Do not overwrite entire matrix to be 0"
          returns="A matrix with appropriate 0s"
          inputs={[
            [3,1,2,9],
            [2,2,2,0],
            [3,2,0,3],
            [1,1,1,1]
          ]}
          outputs={
            ProblemEight([
              [3,1,2,9],
              [2,2,2,0],
              [3,2,0,3],
              [1,1,1,1]
            ])
          }
          outcome_count = "1 per input"
          technique="Matrix technique"
                                                                              
        />

        



      </section>
    );
  }
}

export default ChapterOne;

{/* <Problem
title="",
question="",
returns="",
inputs={[]},
outputs={[]},
outcome_count= "0 per input",
notes=""
/> */}