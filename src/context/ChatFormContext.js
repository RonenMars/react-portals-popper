import React, {useState, createContext, useContext} from 'react';
import {ChatMessagesContext, ChatEmojisBarContext} from "./";
import {MessageTypes} from "../consts";


export const ChatFormContext = createContext();

export const ChatFormProvider = ({children}) => {
    const {addMessage} = useContext(ChatMessagesContext);
    const {setDisplayEmojis} = useContext(ChatEmojisBarContext);

    const [message, setMessage] = useState('');

    const handleSubmit = (formEvent) => {
        formEvent.preventDefault();
        if (message) {
            const newMessage = {
                sender: 'me',
                message: message,
                type: MessageTypes.text
            };
            addMessage(newMessage);
            setMessage('');
            setDisplayEmojis(false);
        }
    }

    return (
        <ChatFormContext.Provider value={{handleSubmit, message, setMessage}}>
            {children}
        </ChatFormContext.Provider>
    );
}
