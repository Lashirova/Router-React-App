import React from 'react'

 class Message extends React.Component {
     constructor(props){
     super(props)}
    render() {
        return (
        <div>
        <h3>"This message is coming from message ID {this.props.match.params.url}"</h3>   
        </div>
        )
    }
}

export default Message;
