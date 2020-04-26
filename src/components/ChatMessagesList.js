import React, {useContext} from 'react';
import {ChatMessagesContext} from "../context";

const messageClass = (messageSender) => messageSender === 'bot' ? 'ChatMessage' : 'ChatMessage MyMessage';
const isMessageTypeText = (message) => message && message.type && message.type === 'text';

const ChatMessagesList = () => {
    const {messages} = useContext(ChatMessagesContext);

    return (
        messages.map((message, index) =>
            <div className={messageClass(message.sender)} key={index}>
                {
                    isMessageTypeText(message) ? message.message :
                        <img src={`${message.message}`} alt={message.message}/>
                }
            </div>
        )
    );
}

export default ChatMessagesList;

