import React, {FunctionComponent} from 'react';

import {Menu, MenuItem} from './components/menu';
import {menus} from './menus';

export const App: FunctionComponent = () => {
  return (
    <div>
      <Menu>
        {menus.map(({text, handler}) => (
          <MenuItem onClick={handler}>{text}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};
