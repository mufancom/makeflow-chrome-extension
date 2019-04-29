import {CreateTaskData, Message, MessageResponseSender} from '../types';

chrome.runtime.onMessage.addListener(
  (request: Message, _, sendResponse: MessageResponseSender) => {
    switch (request.type) {
      case 'get-create-task-data':
        sendResponse(handleGetCreateTaskData());
        break;
      case 'navigation':
        navigate(request.url);
        sendResponse({});
        break;
    }
  },
);

function handleGetCreateTaskData(): CreateTaskData {
  let brief: string | undefined;

  let siteNameElement = document.head.querySelector(
    'meta[property="og:site_name"]',
  );

  let siteName = siteNameElement
    ? siteNameElement.getAttribute('content')
    : undefined;

  if (siteName === 'GitLab') {
    let issueTitleElement = document.querySelector('.issue-details .title');

    brief = issueTitleElement
      ? issueTitleElement.textContent || undefined
      : undefined;
  } else if (siteName === 'GitHub') {
    let issueTitleElement = document.querySelector(
      '.gh-header-title .js-issue-title',
    );

    brief = issueTitleElement
      ? issueTitleElement.textContent || undefined
      : undefined;
  }

  return {
    brief: brief.trim(),
    metadata: {
      ref: document.URL,
    },
  };
}

function navigate(url: string): void {
  let targetHost = new URL(url).host;
  let currentHost = new URL(document.URL).host;

  if (targetHost !== currentHost) {
    return;
  }

  let state = {timestamp: Date.now()};

  history.pushState(state, 'Makeflow chrome extension navigation', url);
  dispatchEvent(new PopStateEvent('popstate', {state}));
}
