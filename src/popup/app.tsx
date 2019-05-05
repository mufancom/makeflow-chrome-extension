import React, {ReactElement} from 'react';

import {Menu, MenuItem} from './components/menu';
import {menus} from './menus';

export function App(): ReactElement {
  return (
    <Menu>
      {menus.map(({text, handler}) => (
        <MenuItem onClick={handler}>{text}</MenuItem>
      ))}
    </Menu>
  );
}
