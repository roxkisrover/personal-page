import { render } from 'inferno';
import WebFont from 'webfontloader';
import App from './App';
import './index.scss';

WebFont.load({
    google: {
        families: ['Ubuntu:400,500:latin,cyrillic'],
    },
    classes: false,
});

render(<App />, document.getElementById('root'));
