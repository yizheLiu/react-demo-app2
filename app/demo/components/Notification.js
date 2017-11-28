import React, {Component} from 'react';

class Notification extends Component {
    getNotificationsCount() {
        const N = 10;
        if(N>0){
            return <span>有{N}条未读消息</span>;
        }else{
            return <span>没有未读消息</span>
        }
    }

    render() {
        return (this.getNotificationsCount());
    }
}

export default Notification;