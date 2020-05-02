import React, {useEffect, useContext, useState} from 'react';
import {ChatMessagesList, ChatMessagesForm} from "./components";
import {ChatFormProvider, ChatMessagesContext, ChatEmojisBarContext} from './context';
import logo from './images/bigpanda-logo.png';
import './App.css';
import {emojisMapped} from "./consts";
import {usePopper} from 'react-popper';


const App = () => {
    const chatInputRef = React.createRef();
    const {messages} = useContext(ChatMessagesContext);
    const {displayEmojis, addEmoji} = useContext(ChatEmojisBarContext);

    // Scroll on every new messages in chat
    useEffect(() => {
        chatInputRef.current.scrollIntoView({behavior: "smooth"});
    }, [messages]);

    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const {styles, attributes} = usePopper(referenceElement, popperElement, {
        placement: 'bottom',
        modifiers: [
            {
                name: 'flip',
                options: {
                    fallbackPlacements: ['top'],
                },
            },
        ],
    });

    return (<div className="App">
        <div className="ChatApp">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to JS Vid Con</h2>
            <div className="Chat">
                <div className="ChatMessages">
                    <ChatMessagesList/>
                </div>
                <div className="ChatReplyBox" id="ChatText" ref={setReferenceElement}>
                    <ChatFormProvider>
                        <ChatMessagesForm
                            chatInputRef={chatInputRef}
                        />
                    </ChatFormProvider>
                    <React.Fragment>
                            {
                                displayEmojis && <div className="ChatMessagesEmojisBar"
                                                      ref={setPopperElement}
                                                      style={styles.popper}
                                                      {...attributes.popper}>
                                    {
                                        emojisMapped.map((singleImage, index) => <img src={singleImage}
                                                                                      key={index}
                                                                                      onClick={() => addEmoji(singleImage)}
                                                                                      alt="Panda Emoji Bar"/>)
                                    }
                                </div>
                            }
                    </React.Fragment>
                </div>
                <div id="credit"> Jokes by <a href="http://www.jokes4us.com/animaljokes/pandajokes.html"
                                              target="_blank">Jokes4Us.com</a></div>
            </div>
        </div>
    </div>);
}

export default App;
