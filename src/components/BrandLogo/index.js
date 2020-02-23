import { string } from 'prop-types';
import './style.scss';

const BrandLogo = ({ image, alt = '' }) => (
    <img
        className="brand-logo"
        src={image}
        alt={alt}
    />
);

BrandLogo.propTypes = {
    image: string.isRequired,
    alt: string,
};

export default BrandLogo;
