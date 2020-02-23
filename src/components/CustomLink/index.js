import { string, node, bool } from 'prop-types';
import './styles.scss';

const CustomLink = ({ to, children, isLastInSentence = false }) => (
    <a
        className={`custom-link ${isLastInSentence ? 'custom-link--last' : ''}`.trim()}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
    >
        {children}
    </a>
);

CustomLink.propTypes = {
    to: string.isRequired,
    children: node.isRequired,
    isLastInSentence: bool,
};

export default CustomLink;
