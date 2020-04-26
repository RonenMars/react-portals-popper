import React from 'react';
import ReactDOM from 'react-dom';
import {ChatEmojisBarProvider, ChatMessagesProvider} from "./context";
import App from './App';
import './index.css';
import './chat.css';

ReactDOM.render(
    <ChatMessagesProvider>
        <ChatEmojisBarProvider>
            <App/>
        </ChatEmojisBarProvider>
    </ChatMessagesProvider>,
    document.getElementById('root')
);
