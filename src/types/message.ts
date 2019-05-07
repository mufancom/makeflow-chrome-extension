import {OmitValueOfKey} from 'tslang';

import {CreateTaskData} from './create-task-data';

export type Message = GetCreateTaskDataMessage | NavigationMessage;

export type MessageWithoutResponse = OmitValueOfKey<Message, 'response'>;

export type MessageResponseSender = (response: Message['response']) => void;

export interface IMessage {
  type: string;
  request: unknown;
  response: unknown;
}

export interface GetCreateTaskDataMessage extends IMessage {
  type: 'get-create-task-data';
  request: undefined;
  response: CreateTaskData;
}

export interface NavigationMessageRequest {
  url: string;
}

export interface NavigationMessage extends IMessage {
  type: 'navigation';
  request: NavigationMessageRequest;
  response: undefined;
}
