/*
 * index.java
 * 
 * Copyright(c) 2007-2017 by Yingzhi Tech
 * All Rights Reserved
 * 
 * Created at 2017-11-24 16:00:49
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
} from 'react-router-dom';

import Home from './demo/page/Home';
import Game from './tic-tac-toe/Game';
import Demo from './demo/page/Demo';

ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/Game" component={Game}/>
            <Route path="/Demo" component={Demo}/>
        </div>
    </HashRouter>
    ,
    document.getElementById('app')
);