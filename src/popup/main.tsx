import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './app';
import './main.css';

main();

function main(): void {
  ReactDOM.render(<App />, document.getElementById('app'));
}
