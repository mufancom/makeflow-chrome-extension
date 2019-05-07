import {DEFAULT_OPTIONS} from '../constants';
import {Message, Options} from '../types';

export async function getTabs(
  info: chrome.tabs.QueryInfo,
): Promise<chrome.tabs.Tab[]> {
  return new Promise(resolve => {
    chrome.tabs.query(info, resolve);
  });
}

export async function sendMessageToTab<TType extends Message['type']>(
  tabId: number,
  type: TType,
  request: Extract<Message, {type: TType}>['request'],
): Promise<Extract<Message, {type: TType}>['response']> {
  return new Promise(resolve => {
    chrome.tabs.sendMessage(tabId, {type, request}, resolve);
  });
}

export async function getOption<TKey extends keyof Options>(
  key: TKey,
): Promise<Options[TKey]> {
  return new Promise(resolve => {
    chrome.storage.sync.get({options: DEFAULT_OPTIONS}, ({options}) => {
      resolve(options[key]);
    });
  });
}

export async function getOptions(): Promise<Options> {
  return new Promise(resolve => {
    chrome.storage.sync.get({options: DEFAULT_OPTIONS}, ({options}) => {
      resolve(options as Options);
    });
  });
}

export function setOptions(options: Options): void {
  chrome.storage.sync.set({options});
}
