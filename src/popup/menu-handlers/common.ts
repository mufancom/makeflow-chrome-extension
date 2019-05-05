import {getOption, getTabs} from '../../utils';

export async function navigateToMakeflow(): Promise<void> {
  let makeflowBaseURL = await getOption('baseURL');

  let tabs = await getTabs({
    url: `*://${new URL(makeflowBaseURL).hostname}/app*`,
  });

  let tab = tabs[0];
  let tabId = tab && tab.id;

  if (tabId === undefined) {
    chrome.tabs.create({
      url: `${makeflowBaseURL}/app`,
    });
  } else {
    chrome.tabs.update(tabId, {
      active: true,
    });
  }
}
