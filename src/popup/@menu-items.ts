import {handleCreateTask, navigateToMakeflow} from './@menu-handlers';
import {MenuItem} from './@types';

export const menuItems: MenuItem[] = [
  {
    text: '打开 Makeflow',
    handler: navigateToMakeflow,
  },
  {
    text: '创建任务',
    handler: handleCreateTask,
  },
];
