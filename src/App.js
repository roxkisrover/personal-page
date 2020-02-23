import { Component } from 'inferno';
import Container from './components/Container';
import Message from './components/Message';
import time from './constants/time';
import getMessages from './helpers/getMessages';

const currentDate = new Date();
const messagesList = getMessages(currentDate).map((item) => ({
    id: item.id,
    content: item.render(),
}));

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                messagesList[0],
            ],
        };
    }

    componentDidMount() {
        this.setAddMessageTimer();
    }

    componentWillUnmount() {
        this.clearAddMessageTimer();
    }

    setAddMessageTimer = () => {
        this.addMessageTimer = setInterval(
            this.addNewMessage,
            time.basicDelay + time.typingDuration,
        );
    };

    clearAddMessageTimer = () => {
        clearInterval(this.addMessageTimer);
    };

    addNewMessage = () => {
        const { messages } = this.state;
        const newList = [...messages];

        if (newList.length < messagesList.length) {
            newList.push(messagesList[newList.length]);
            this.setState({ messages: newList });
        } else {
            this.clearAddMessageTimer();
        }
    };

    getMessageOrder = (messageId) => {
        const { messages } = this.state;

        switch (messageId) {
            case 1:
                return 'first';
            case messages.length:
                return 'last';
            default:
                return 'middle';
        }
    };

    renderMessage = (message) => (
        <Message
            key={`message-${message.id}`}
            order={this.getMessageOrder(message.id)}
        >
            {message.content}
        </Message>
    );

    render() {
        const { messages } = this.state;

        return (
            <Container date={currentDate} $HasKeyedChildren>
                {messages.map(this.renderMessage)}
            </Container>
        );
    }
}

export default App;
