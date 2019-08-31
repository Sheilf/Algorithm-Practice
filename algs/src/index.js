import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Chapter from './problems/Chapter';
import ChapterNav from './layout/ChapterNav';
import About from './About/About';
import {BrowserRouter, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <ChapterNav />
            <Route exact path = "/" component={App}></Route>
            <Route exact path = "/about" component={About}></Route>
            <Route exact path ="/chapters/:chapterID" component={Chapter} />
            
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
