import {Message} from '../types';

export async function getTabs(
  info: chrome.tabs.QueryInfo,
): Promise<chrome.tabs.Tab[]> {
  return new Promise(resolve => {
    chrome.tabs.query(info, resolve);
  });
}

export async function sendMessageToTab<TMessage = Message, TResponse = unknown>(
  tabId: number,
  message: TMessage,
): Promise<TResponse> {
  return new Promise(resolve => {
    chrome.tabs.sendMessage(tabId, message, resolve);
  });
}
