import React, {Component} from 'react'

import './../css/demo.css'

const User = (props) => {
    return (
        <div>
            <div>姓名：{props.user.username}</div>
            <div>年龄：{props.user.age}</div>
            <div>性别：{props.user.gender}</div>
            <hr/>
        </div>
    )
}

class Demo1 extends Component {
    render() {
        const word = 'is good';
        const className = 'header';
        const isGoodWord = false;
        const goodWord = <strong>is good !</strong>;
        const badWord = <span>is not good !</span>;

        const title = <h1 className="title">ScriptOJ</h1>;
        const page = <div className="content">{title}</div>;

        const users = [
            {username: 'Jerry', age: 21, gender: 'male'},
            {username: 'Tomy', age: 22, gender: 'male'},
            {username: 'Lily', age: 19, gender: 'female'},
            {username: 'Lucy', age: 20, gender: 'female'}
        ];
        return (
            <div>
                <h1>React book {word}</h1>
                <h1>React book {1 + 2}</h1>
                <h1>React book {(function () {
                    return 'is function'
                })()}</h1>
                <div className={className}>
                    jxs 中插入javascript表达式{}
                </div>
                <div>
                    {isGoodWord ?
                        <strong>is good</strong> :
                        <span>is not good</span>
                    }
                </div>
                <div>
                    {isGoodWord ? goodWord : badWord}
                </div>
                <div>
                    {this.renderGoodWord("a", "b")}
                </div>
                {page}
                <div>
                    <p> map </p>
                    {
                        users.map((user,i) => {
                            return (
                                <User  key={i}  user={user}/>
                            )
                        })
                    }
                    <p> for </p>
                    {this.renderUserList(users)}
                </div>
            </div>
        )
    }

    renderUserList(users) {
        const usersElements = [];
        for (let user of users) {
            usersElements.push(
                <User key={usersElements.length} user={user}/>
            )
        }
        return usersElements;
    }

    renderGoodWord(goodWord, badWord) {
        const isGoodWord = true;
        return isGoodWord ? goodWord : badWord;
    }
}

export default Demo1;