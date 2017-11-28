import React, {Component} from 'react';

class Screen extends Component {

    static defaultProps = {
        showContent: '无内容'
    }

    render() {
        return (<div>我是显示器:{this.props.showContent}</div>);
    }
}

export default Screen;