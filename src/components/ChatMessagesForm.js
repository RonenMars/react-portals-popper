import React, {useContext} from 'react';
import {ChatFormContext, ChatEmojisBarContext} from '../context';
import emoji from "../images/emoji.png";

const ChatMessagesForm = ({chatInputRef}) => {
    const {handleSubmit, message, setMessage} = useContext(ChatFormContext);
    const {setDisplayEmojis, displayEmojis} = useContext(ChatEmojisBarContext);
    return (
        <form onSubmit={handleSubmit} className="ChatForm">
            <input className="ChatInput" type="text"
                   value={message}
                   placeholder="Say hey to your panda bot"
                   onChange={event => {
                       setMessage(event.target.value);
                   }} ref={chatInputRef}/>
            <img src={emoji} className="EmojiBarToggleTrigger" alt="emojiBar"
                 onClick={() => setDisplayEmojis(!displayEmojis)}/>
        </form>
    );
}

export default ChatMessagesForm;
