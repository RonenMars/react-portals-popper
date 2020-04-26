import React, {useEffect, useContext} from 'react';
import {ChatMessagesList, ChatMessagesForm} from "./components";
import {ChatFormProvider, ChatMessagesContext, ChatEmojisBarContext} from './context';
import logo from './images/bigpanda-logo.png';
import './App.css';
import {emojisMapped} from "./consts";

const App = () => {
    const chatInputRef = React.createRef();
    const {messages} = useContext(ChatMessagesContext);
    const {displayEmojis, addEmoji} = useContext(ChatEmojisBarContext);


    // Scroll on every new messages in chat
    useEffect(() => {
        chatInputRef.current.scrollIntoView({behavior: "smooth"});
    }, [messages]);


    return (<div className="App">
        <div className="ChatApp">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to JS Vid Con</h2>
            <div className="Chat">
                <div className="ChatMessages">
                    <ChatMessagesList/>
                </div>
                <div className="ChatReplyBox" id="ChatText">
                    <ChatFormProvider>
                        <ChatMessagesForm
                            chatInputRef={chatInputRef}
                        />
                    </ChatFormProvider>
                    {
                        displayEmojis && <div className="ChatMessagesEmojisBar">
                            {
                                emojisMapped.map((singleImage, index) => <img src={singleImage}
                                                                              key={index}
                                                                              onClick={() => addEmoji(singleImage)}
                                                                              alt="Panda Emoji Bar"/>)
                            }
                        </div>
                    }
                </div>
                <div id="credit"> Jokes by <a href="http://www.jokes4us.com/animaljokes/pandajokes.html"
                                              target="_blank">Jokes4Us.com</a></div>
            </div>
        </div>
    </div>);
}

export default App;
