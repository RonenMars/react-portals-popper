import ReactDOM from 'react-dom';

const ChatPortal = ({portalElement, children}) => ReactDOM.createPortal(children, portalElement);

export default ChatPortal;
