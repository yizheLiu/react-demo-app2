import React, {Component} from 'react';

import Header from "../components/Header";
import Demo1 from "../components/Demo1";
import Notification from "../components/Notification";
import LikeButton from "../components/LikeButton";
import Computer from "../components/Computer";

class Demo extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Demo1/>
                <Notification/>
                <LikeButton/>
                <LikeButton likedText='已赞' unlikedText='赞'/>
                {/*<LikeButton*/}
                {/*wordings={{likedText: 'has zan', unlikedText: 'zan'}}*/}
                {/*onClick={() => {*/}
                {/*console.log('Click on like button,from Demo')*/}
                {/*}}/>*/}
                <Computer/>
            </div>
        );
    }
}

export default Demo;