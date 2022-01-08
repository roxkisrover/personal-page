import { ComponentChildren } from "preact";

import './styles.scss';

interface ICustomLinkProps {
    to: string;
    children: ComponentChildren;
    isLastInSentence?: boolean;
}

const CustomLink = ({ to, children, isLastInSentence = false }: ICustomLinkProps) => (
    <a
        className={`custom-link ${isLastInSentence ? 'custom-link--last' : ''}`.trim()}
        href={to}
        target="_blank"
        rel="noopener noreferrer"
    >
        {children}
    </a>
);

export default CustomLink;
