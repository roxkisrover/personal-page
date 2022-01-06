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
                Я создаю клиентскую часть веб-приложений в команде
                <CustomLink to={links.unit6}>unit6</CustomLink>
                на React, Redux и сопутствующих технологиях.
            </>
        ),
    },
    {
        id: 3,
        render: () => (
            <>
                Примеры моих работ лежат в
                <CustomLink
                    to={links.github}
                    isLastInSentence
                >
                    <BrandLogo
                        image={logoGitHub}
                        alt="GitHub"
                    />
                    github
                </CustomLink>
                {' '}и
                <CustomLink
                    to={links.gitlab}
                    isLastInSentence
                >
                    <BrandLogo
                        image={logoGitLab}
                        alt="GitHub"
                    />
                    gitlab
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
                    linkedin
                </CustomLink>
                или
                <CustomLink
                    to={links.telegram}
                    isLastInSentence
                >
                    <BrandLogo
                        image={logoTelegram}
                        alt="Telegram"
                    />
                    telegram
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
