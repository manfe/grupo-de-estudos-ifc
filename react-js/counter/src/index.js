import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/counter/Counter';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Counter name="Contador no React" increment={2} />, 
    document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
