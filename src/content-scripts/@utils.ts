export function navigate(path: string): void {
  let event = new MessageEvent('push-history', {data: {ref: path}});

  document.dispatchEvent(event);
}
