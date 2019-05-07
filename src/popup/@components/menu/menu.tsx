import React, {FunctionComponent} from 'react';

import './@styles.css';

export const Menu: FunctionComponent = ({children}) => {
  return <div className="menu">{children}</div>;
};
