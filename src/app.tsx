import { useState, useEffect } from 'preact/hooks';

import Container from './components/Container';
import Message from './components/Message';
import time from './constants/time';
import getMessages, { IMessage } from './helpers/getMessages';

const CURRENT_DATE = new Date();
const MESSAGES_LIST = getMessages(CURRENT_DATE);

const App = () => {
    const [messages, setMessages] = useState([MESSAGES_LIST[0]]);
    let addMessageTimer: ReturnType<typeof setInterval>;

    const clearAddMessageTimer = () => {
        clearInterval(addMessageTimer);
    };

    const addNewMessage = () => {
        setMessages((prevMessages) => {
            if (prevMessages.length < MESSAGES_LIST.length) {
                const newMessage = MESSAGES_LIST[prevMessages.length];

                return [...prevMessages, newMessage];
            }

            clearAddMessageTimer();

            return prevMessages;
        })
    }

    const setAddMessageTimer = () => {
        addMessageTimer = setInterval(addNewMessage, time.basicDelay + time.typingDuration,);
    };

    useEffect(() => {
        setAddMessageTimer();

        return clearAddMessageTimer
    }, [])

    const getMessageOrder = (messageId: number) => {
        switch (messageId) {
            case 1:
                return 'first';
            case messages.length:
                return 'last';
            default:
                return 'middle';
        }
    };

    const renderMessage = (message: IMessage) => (
        <Message
            key={`message-${message.id}`}
            order={getMessageOrder(message.id)}
        >
            {message.render()}
        </Message>
    );

    return (
        <Container date={CURRENT_DATE}>
            {messages.map(renderMessage)}
        </Container>
    );
}

export default App;
