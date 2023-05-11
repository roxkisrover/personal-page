import { ComponentChildren } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import time from 'constants/time';

import './styles.scss';

interface IMessageProps {
  order: string;
  children: ComponentChildren;
}

const Message = ({ order, children }: IMessageProps) => {
  const [isTyping, setIsTyping] = useState(true);
  let typingTimer: ReturnType<typeof setTimeout>;

  const setTypingTimer = (): void => {
    typingTimer = setTimeout(() => {
      setIsTyping(false);
    }, time.typingDuration);
  };

  useEffect(() => {
    setTypingTimer();

    return () => {
      clearTimeout(typingTimer);
    };
  }, []);

  if (isTyping)
    return (
      <div className="spinner">
        <div className="spinner__body">
          <div className="spinner__dot spinner__dot--first" />
          <div className="spinner__dot spinner__dot--second" />
          <div className="spinner__dot spinner__dot--third" />
        </div>
      </div>
    );

  return (
    <div className="message">
      <div className={`message__body message__body--${order}`}>{children}</div>
    </div>
  );
};

export default Message;
