import {CreateTaskData} from '../../types';
import {getOption, getTabs, sendMessageToTab} from '../../utils';

export async function handleCreateTask(): Promise<void> {
  let [tab] = await getTabs({
    active: true,
    currentWindow: true,
  });
  let tabId = tab && tab.id;

  let data: CreateTaskData | undefined;

  if (tabId) {
    data = await sendMessageToTab(tabId, 'get-create-task-data', undefined);
  }

  await navigateToCreateTask(data);
}

async function navigateToCreateTask(data?: CreateTaskData): Promise<void> {
  let makeflowBaseURL = await getOption('baseURL');

  let url = `/workbench?create-task=${
    data ? encodeURIComponent(JSON.stringify(data)) : ''
  }`;

  let [tab] = await getTabs({
    url: `*://${new URL(makeflowBaseURL).hostname}/app*`,
  });

  let tabId = tab && tab.id;

  if (tabId === undefined) {
    chrome.tabs.create({
      url,
    });
  } else {
    chrome.tabs.update(tabId, {
      active: true,
    });

    await sendMessageToTab(tabId, 'navigation', {url});
  }
}
