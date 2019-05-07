import React, {ReactElement} from 'react';

import {Menu, MenuItem} from './@components';
import {menuItems} from './@menu-items';

export function App(): ReactElement {
  return (
    <Menu>
      {menuItems.map(({text, handler}) => (
        <MenuItem key={text} onClick={handler}>
          {text}
        </MenuItem>
      ))}
    </Menu>
  );
}
