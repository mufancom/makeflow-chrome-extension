import {CreateTaskData} from '../../types';

export function getGitHubTaskData(): CreateTaskData | undefined {
  let siteNameElement = document.head.querySelector(
    'meta[property="og:site_name"]',
  );

  let siteName = siteNameElement
    ? siteNameElement.getAttribute('content')
    : undefined;

  if (siteName !== 'GitHub') {
    return undefined;
  }

  let issueTitleElement = document.querySelector(
    '.gh-header-title .js-issue-title',
  );

  let issueTitle = issueTitleElement?.textContent ?? document.title;

  let issueDescription = document.querySelector<HTMLTextAreaElement>('textarea[name="issue[body]"]')?.value;

  return {
    brief: issueTitle.trim(),
    description: issueDescription?.trim(),
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
