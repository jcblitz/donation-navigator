import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Campaign from './pages/Campaign';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<DonationAction />, document.getElementById('donation-action'));
ReactDOM.render(<Campaign />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
