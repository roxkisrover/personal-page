import { render } from 'preact';
import WebFont from 'webfontloader';

import App from './app';
import './index.scss';

WebFont.load({
    google: {
        families: ['Ubuntu:400,500:latin,cyrillic'],
    },
    classes: false,
});

render(<App />, document.getElementById('app')!)
