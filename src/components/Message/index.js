import { Component } from 'inferno';
import { node, string } from 'prop-types';
import Spinner from '../Spinner';
import time from '../../constants/time';
import './style.scss';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTyping: true,
        };
    }

    componentDidMount() {
        this.setTypingTimer();
    }

    componentWillUnmount() {
        clearTimeout(this.typingTimer);
    }

    setTypingTimer = () => {
        this.typingTimer = setTimeout(() => {
            this.setState({ isTyping: false });
        }, time.typingDuration);
    };

    render() {
        const { isTyping } = this.state;
        const { children, order } = this.props;

        if (isTyping) return <Spinner />;

        return (
            <div className="message">
                <div className={`message__body message__body--${order}`}>
                    {children}
                </div>
            </div>
        );
    }
}

Message.propTypes = {
    children: node.isRequired,
    order: string.isRequired,
};

export default Message;
