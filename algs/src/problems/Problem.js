

import React, { Component } from 'react';



let Problem = (props) => {
  
    let outputs = props.outputs.map((outcome)=>(
        <li>{outcome.toString()}</li>
    ))

    let inputs = props.inputs.map((outcome)=>(
        <li>{outcome}</li>
    ))

    return(
        <section className="Problem">
            <div><b>{props.title}</b></div>
            <div>{props.question}</div>
            <div><br/><b>Return: </b>{props.returns}</div>
            <hr/>
            <div>
                <b>Cases</b>
                <ol>{inputs}</ol>
            </div>
            <div>
                <b>Outcomes ({props.outcome_count})</b>
                <ol>{outputs}</ol>
            </div>
            <div><i>Technique used<br/></i>{props.technique}</div>
            <br/>
            <div><i>Notes <br/>{props.notes}</i></div>
            <br/>
            <div><code> Solution: <a href={props.github} target="_blank">{props.github}</a> </code></div>
        </section>

    )
    

}

Problem.defaultProps = {
    title: "Problem Title",
    question: "Default question",
    returns: "Default returns",
    inputs:["EMPTY"],
    outputs:["EMPTY"],
    outcome_count: "0 per input",
    notes:"Notes are null",
    github:"https://www.github.com/sheilf",
    technique: "Default value"

}

export default Problem;

