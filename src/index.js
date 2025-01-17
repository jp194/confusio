import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
