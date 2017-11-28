import React, {Component} from 'react'
import Title from "./Title";

class Header extends Component {
    render() {
        // return renderContent("Hello World");
        return (<div><Title/></div>)
    }
}

function renderContent(content) {
    return (<div>
        <h1>{content}</h1>
    </div>);
}

export default Header;