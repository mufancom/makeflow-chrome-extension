import React, {FunctionComponent} from 'react';

import './@styles.css';

export interface MenuItemProps {
  onClick(): void;
}

export const MenuItem: FunctionComponent<MenuItemProps> = ({
  onClick,
  children,
}) => {
  return (
    <div className="menu-item" onClick={onClick}>
      {children}
    </div>
  );
};
