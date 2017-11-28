import React, {Component} from 'react';
import Screen from "./Screen";

class Computer extends Component {

    constructor() {
        super();
        this.state = {
            status: false
        }
    }

    handleClickOnBtn() {
        this.setState({
            status: !this.state.status
        }, () => {
            this.setState({
                showContent: this.state.status ? '显示器亮了' : '显示器关了'
            })
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClickOnBtn.bind(this)}>电脑开关</button>
                <Screen showContent={this.state.showContent}/>
            </div>
        );
    }

}

export default Computer;