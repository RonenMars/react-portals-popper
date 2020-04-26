import React, {useState, createContext} from 'react';
import {botJokes, MessageTypes} from "../consts";

const chatInitialState = [
    {
        sender: 'bot',
        message: 'Hello Stranger',
        type: MessageTypes.text
    }
];

export const ChatMessagesContext = createContext();

export const ChatMessagesProvider = ({children}) => {
    const [messages, setMessages] = useState(chatInitialState);

    const addBotMessage = () => {
        const randomAnswer = botJokes[Math.floor(Math.random() * botJokes.length)];
        const botAnswer = {
            sender: 'bot',
            message: randomAnswer,
            type: MessageTypes.text
        };
        setMessages(messages => [...messages, botAnswer]);
    }

    const addMessage = (newMessage) => {
        setMessages([...messages, newMessage]);
        addBotMessage();
    }

    return (
        <ChatMessagesContext.Provider value={{messages, addMessage}}>
            {children}
        </ChatMessagesContext.Provider>
    );
}
