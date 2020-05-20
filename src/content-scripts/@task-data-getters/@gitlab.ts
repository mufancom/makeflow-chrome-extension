import {CreateTaskData} from '../../types';

export function getGitLabTaskData(): CreateTaskData | undefined {
  let siteNameElement = document.head.querySelector(
    'meta[property="og:site_name"]',
  );

  let siteName = siteNameElement
    ? siteNameElement.getAttribute('content')
    : undefined;

  if (siteName !== 'GitLab') {
    return undefined;
  }

  let issueTitleElement = document.querySelector('.issue-details .title');

  let issueTitle = issueTitleElement?.textContent ?? document.title;

  return {
    brief: issueTitle.trim(),
    outputs: {
      'metadata_source': {
        type: 'raw',
        value: {
          type: 'github',
          url: location.href,
        },
      }
    }
  };
}
