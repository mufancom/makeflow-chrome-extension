export function getGitLabIssueTitle(): string | undefined {
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

  return issueTitleElement
    ? issueTitleElement.textContent || undefined
    : undefined;
}
