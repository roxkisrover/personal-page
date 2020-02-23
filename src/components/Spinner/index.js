import './style.scss';

const Spinner = () => (
    <div className="spinner">
        <div className="spinner__body">
            <div className="spinner__dot spinner__dot--first" />
            <div className="spinner__dot spinner__dot--second" />
            <div className="spinner__dot spinner__dot--third" />
        </div>
    </div>
);

export default Spinner;
