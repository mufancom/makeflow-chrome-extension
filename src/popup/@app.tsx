import React, {ReactElement} from 'react';

import {Menu, MenuItem} from './@components';
import {menus} from './@menus';

export function App(): ReactElement {
  return (
    <Menu>
      {menus.map(({text, handler}) => (
        <MenuItem key={text} onClick={handler}>
          {text}
        </MenuItem>
      ))}
    </Menu>
  );
}
