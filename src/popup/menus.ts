import {NavigationMessage} from '../types';
import {getTabs, sendMessageToTab} from '../utils';

import {CreateTaskData, Menu} from './types';

const MAKEFLOW_BASE_URL = 'http://localhost:8080';
const MAKEFLOW_HOST = new URL(MAKEFLOW_BASE_URL).hostname;

export const menus: Menu[] = [
  {
    text: '打开 Makeflow',
    handler: async () => {
      let tabs = await getTabs({
        url: `*://${MAKEFLOW_HOST}/app*`,
      });

      let tab = tabs[0];
      let tabId = tab && tab.id;

      if (tabId === undefined) {
        chrome.tabs.create({
          url: `${MAKEFLOW_BASE_URL}/app`,
        });
      } else {
        chrome.tabs.update(tabId, {
          active: true,
        });
      }
    },
  },
  {
    text: '创建任务',
    handler: async () => {
      let tabs = await getTabs({
        active: true,
        currentWindow: true,
      });

      let tab = tabs[0];
      let data: CreateTaskData | undefined;

      if (tab) {
        data = await sendMessageToTab(tab.id, {
          type: 'get-create-task-data',
        });
      }

      await navigateToCreateTask(data);
    },
  },
];

async function navigateToCreateTask(data?: CreateTaskData): Promise<void> {
  let url = `${MAKEFLOW_BASE_URL}/app/workbench?create-task=${
    data ? encodeURIComponent(JSON.stringify(data)) : ''
  }`;

  let tabs = await getTabs({
    url: `*://${MAKEFLOW_HOST}/app*`,
  });

  let tab = tabs[0];

  if (tab === undefined) {
    chrome.tabs.create({
      url,
    });
  } else {
    chrome.tabs.update(tab.id, {
      active: true,
    });

    await sendMessageToTab<NavigationMessage>(tab.id, {
      type: 'navigation',
      url,
    });
  }
}
