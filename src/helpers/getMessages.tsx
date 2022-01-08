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
        render: () => 'Привет! Меня зовут Антон Николаенко.',
    },
    {
        id: 2,
        render: () => (
            <>
                В команде<CustomLink to={links.unit6}>UNIT6</CustomLink>я занимаюсь созданием клиентской части
                российских м международных веб-приложений на React, Redux и сопутствующих технологиях.
                Тематика приложений — FinTech.
            </>
        ),
    },
    {
        id: 3,
        render: () => (
            <>
                С результатами работы можно ознакомиться на
                <CustomLink
                    to={links.github}
                    isLastInSentence
                >
                    <BrandLogo
                        image={logoGitHub}
                        alt="GitHub"
                    />
                    GitHub
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
                    isLastInSentence
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
        render: () => <>А ещё мама говорит, что я классный.</>,
    },
    {
        id: 6,
        render: () => getLastMessageText(currentDate),
    },
];

export default getMessages;
