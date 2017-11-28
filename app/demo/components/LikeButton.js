import React, {Component} from 'react';
import './../css/demo.css';

class LikeButton extends Component {
    static defaultProps= {
        likedText: '取消',
        unlikedText: '点赞'
    };
    constructor() {
        super();
        this.state = {
            isLiked: false
        }
    }

    handleClickOnLikeButton() {
        if (this.props.onClick) {
            this.props.onClick();
        } else {
            //setState 的第二种使用方式，可以接受一个函数作为参数
            console.log(this.state.isLiked);
            this.setState({
                isLiked: !this.state.isLiked
            }, () => {
                console.log(this.state.isLiked);
            });

            // //
            // this.setState({
            //     isBarking: true,
            //     isRunning: true
            // }, () => {
            //     console.log(this.state.isBarking, this.state.isRunning);
            // });
            // setTimeout(() => {
            //     this.setState({
            //         isBarking: false,
            //         isRunning: false
            //     }, () => {
            //         console.log(this.state.isBarking, this.state.isRunning);
            //     })
            // }, 3000)
        }
    }

    render() {
        const likedText = this.props.likedText;
        const unlikedText = this.props.unlikedText;
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? likedText : unlikedText}
            </button>
        );
        // const wordings = this.props.wordings || {defaultProps}
        // return (
        //     <button onClick={this.handleClickOnLikeButton.bind(this)}>
        //         {this.state.isLiked ? wordings.likedText : wordings.unlikedText}
        //     </button>
        // );
    }
}

export default LikeButton;