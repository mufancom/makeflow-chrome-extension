export function getGitHubIssueTitle(): string | undefined {
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

  return (issueTitleElement && issueTitleElement.textContent) || undefined;
}
