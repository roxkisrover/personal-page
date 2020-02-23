import { createTextVNode } from 'inferno';
import { instanceOf, node } from 'prop-types';
import './style.scss';

const Container = ({ date, children }) => {
    const pad = (num) => (num < 10 ? `0${num}` : num);
    const time = `${pad(date.getHours())}:${pad(date.getMinutes())}`;

    return (
        <>
            <div className="top-line" />

            <header className="timestamp" $HasVNodeChildren>
                {createTextVNode(`Сегодня, в ${time}`)}
            </header>

            <div className="container">
                <div className="avatar" />
                {children}
            </div>

            <h1 className="aside">frontend</h1>
        </>
    );
};

Container.propTypes = {
    date: instanceOf(Date).isRequired,
    children: node.isRequired,
};

export default Container;
