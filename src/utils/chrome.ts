import {DEFAULT_OPTIONS} from '../constants';
import {Message, Options} from '../types';

export async function getTabs(
  info: chrome.tabs.QueryInfo,
): Promise<chrome.tabs.Tab[]> {
  return new Promise(resolve => {
    chrome.tabs.query(info, resolve);
  });
}

export async function sendMessageToTab<
  TMessage extends Message,
  TResponse extends unknown
>(tabId: number, message: TMessage): Promise<TResponse> {
  return new Promise(resolve => {
    chrome.tabs.sendMessage(tabId, message, resolve);
  });
}

export async function getOption<TKey extends keyof Options>(
  key: TKey,
): Promise<Options[TKey]> {
  return new Promise(resolve => {
    chrome.storage.local.get({options: DEFAULT_OPTIONS}, ({options}) => {
      resolve(options[key]);
    });
  });
}

export async function getOptions(): Promise<Options> {
  return new Promise(resolve => {
    chrome.storage.local.get({options: DEFAULT_OPTIONS}, ({options}) => {
      resolve(options as Options);
    });
  });
}

export function setOptions(options: Options): void {
  chrome.storage.local.set({options});
}
