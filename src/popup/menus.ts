import {navigateToMakeflow} from './menu-handlers/common';
import {handleCreateTask} from './menu-handlers/task';
import {Menu} from './types';

export const menus: Menu[] = [
  {
    text: '打开 Makeflow',
    handler: navigateToMakeflow,
  },
  {
    text: '创建任务',
    handler: handleCreateTask,
  },
];
