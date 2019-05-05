export function navigate(url: string): void {
  let targetHost = new URL(url).host;
  let currentHost = new URL(document.URL).host;

  if (targetHost !== currentHost) {
    return;
  }

  let state = {timestamp: Date.now()};

  history.pushState(state, 'Makeflow chrome extension navigation', url);
  dispatchEvent(new PopStateEvent('popstate', {state}));
}
