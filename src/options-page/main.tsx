import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './app';

main();

function main(): void {
  ReactDOM.render(<App />, document.getElementById('app'));
}
