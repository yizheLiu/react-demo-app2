
/* 
 * Board.java
 * 
 * Copyright(c) 2007-2017 by Yingzhi Tech
 * All Rights Reserved
 * 
 * Created at 2017-11-24 16:57:57
 */

/**
 * Board 组件包含了9个squares
 * @type type
 */
import React from 'react';
var Square = require('./Square');

class Board extends React.Component {
    renderSquare(i) {
        return (<Square 
            value={this.props.squares[i]} 
            onClick={() => this.props.onClick(i)}/>
                );
    }
    
    render() {
        return (
                <div>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
                );
    }
}
module.exports = Board;