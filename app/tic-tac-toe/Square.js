
/* 
 * Square.java
 * 
 * Copyright(c) 2007-2017 by Yingzhi Tech
 * All Rights Reserved
 * 
 * Created at 2017-11-24 16:57:29
 */

/**
 * Square 组件代表一个单独的 <button>
 * @type type
 */
var React = require('react');

class Square extends React.Component {
    render() {
        return (
                <button className="square" onClick={() => this.props.onClick()}>
                    {this.props.value}
                </button>
                );
    }
}
;
module.exports = Square;
