
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
import {  BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Game from './tic-tac-toe/Game';

ReactDOM.render(
        <Router>
            <Route path="/" component={Game}/>
        </Router>,
        document.getElementById('app')
        );