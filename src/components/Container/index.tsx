import { ComponentChildren } from "preact";

import './style.scss';

interface IContainerProps {
    date: Date;
    children: ComponentChildren;
}

const Container = ({ date, children }: IContainerProps) => {
    const pad = (num: number): number | string => (num < 10 ? `0${num}` : num);
    const time: string = `${pad(date.getHours())}:${pad(date.getMinutes())}`;

    return (
        <>
            <div className="top-line" />
            <header className="timestamp">
                {`Сегодня, в ${time}`}
            </header>

            <div className="chat-wrapper">
                <div className="container">
                    <div className="avatar" />
                    {children}
                </div>
            </div>

            <h1 className="aside">frontend</h1>
        </>
    );
};

export default Container;
