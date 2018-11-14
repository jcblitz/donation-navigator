import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Campaign from './pages/Campaign';

ReactDOM.render(<Campaign />, document.getElementById('root'));
serviceWorker.unregister();
