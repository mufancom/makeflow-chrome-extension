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
  let makeflowBaseURL = new URL(await getOption('baseURL'));

  let path = `/workbench?create-task=${
    data ? encodeURIComponent(JSON.stringify(data)) : ''
  }`;

  let url = `${makeflowBaseURL.origin}/app/${path}`;

  let [tab] = await getTabs({
    url: `${makeflowBaseURL.origin}/app*`,
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

    await sendMessageToTab(tabId, 'navigation', {url: path});
  }
}
