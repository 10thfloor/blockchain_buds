import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Web3 from 'web3';

const web3 = new Web3(window.ethereum);

(async function() {
  const address = await web3.eth.getAccounts();
  ReactDOM.render(<App address={address} />, document.getElementById('root'));
})();

serviceWorker.unregister();
