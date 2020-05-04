import { render } from 'inferno';
import WebFont from 'webfontloader';
import * as firebase from 'firebase/app';
import firebaseConfig from './constants/firebaseConfig'
import App from './App';
import './index.scss';

WebFont.load({
    google: {
        families: ['Ubuntu:400,500:latin,cyrillic'],
    },
    classes: false,
});

firebase.initializeApp(firebaseConfig);
firebase.analytics();

render(<App />, document.getElementById('root'));
