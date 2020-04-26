import React, {useState, createContext, useContext} from 'react';
import {ChatMessagesContext} from "./";
import {MessageTypes} from "../consts";

export const ChatEmojisBarContext = createContext();

export const ChatEmojisBarProvider = ({children}) => {
    const {addMessage} = useContext(ChatMessagesContext);

    const [displayEmojis, setDisplayEmojis] = useState(false);

    const addEmoji = (emojiImage) => {
        if (emojiImage) {
            const newMessage = {
                sender: 'me',
                message: emojiImage,
                type: MessageTypes.image
            };
            addMessage(newMessage);
            setDisplayEmojis(false);
        }
    }

    return (
        <ChatEmojisBarContext.Provider value={{displayEmojis, setDisplayEmojis, addEmoji}}>
            {children}
        </ChatEmojisBarContext.Provider>
    );
}
