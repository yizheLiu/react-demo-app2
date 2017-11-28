import React, {Component} from 'react';

class Title extends Component {
    handleClickOnTitle(word,e){
        console.log(this);
        console.log(word);
        console.log("Click on title.",e.target.innerHTML);
    }
    render() {
        return (<h1 onClick={this.handleClickOnTitle.bind(this,'Hello')}>React book Title</h1>)
    }
}

export default Title;