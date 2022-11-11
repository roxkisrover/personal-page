import { ComponentChildren } from "preact";

import CustomLink from '../components/CustomLink';
import BrandLogo from '../components/BrandLogo';
import getLastMessageText from './getLastMessageText';
import links from '../constants/links';
import logoGitLab from '../images/gitlab.svg';
import logoGitHub from '../images/github.svg';
import logoLinkedIn from '../images/linkedin.svg';
import logoTelegram from '../images/telegram.svg';

export interface IMessage {
    id: number;
    render: () => ComponentChildren;
}

const getMessages = (currentDate: Date): IMessage[] => [
    {
        id: 1,
        render: () => 'Привет! Меня зовут Антон.',
    },
    {
        id: 2,
        render: () => (
            <>
                В команде<CustomLink to={links.unit6}>UNIT6</CustomLink>я занимаюсь созданием frontend части
                российских и международных FinTech проектов на React и сопутствующих технологиях.
            </>
        ),
    },
    {
        id: 3,
        render: () => (
            <>
                С открытыми примерами кода можно ознакомиться на
                <CustomLink to={links.github}>
                    <BrandLogo
                        image={logoGitHub}
                        alt="GitHub"
                    />
                    GitHub
                </CustomLink>
                и
                <CustomLink
                    to={links.gitlab}
                    isLast
                >
                    <BrandLogo
                        image={logoGitLab}
                        alt="GitHub"
                    />
                    GitLab
                </CustomLink>
                .
            </>
        ),
    },
    {
        id: 4,
        render: () => (
            <>
                Связаться со мной можно через
                <CustomLink to={links.linkedin}>
                    <BrandLogo
                        image={logoLinkedIn}
                        alt="LinkedIn"
                    />
                    LinkedIn
                </CustomLink>
                или
                <CustomLink
                    to={links.telegram}
                    isLast
                >
                    <BrandLogo
                        image={logoTelegram}
                        alt="Telegram"
                    />
                    Telegram
                </CustomLink>
                .
            </>
        ),
    },
    {
        id: 5,
        render: () => getLastMessageText(currentDate),
    },
];

export default getMessages;
