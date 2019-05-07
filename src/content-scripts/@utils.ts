export function navigate(url: string): void {
  history.pushState(undefined, 'Makeflow chrome extension navigation', url);
  dispatchEvent(new PopStateEvent('popstate', undefined));
}
