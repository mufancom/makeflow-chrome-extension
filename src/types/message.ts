export type Message = GetCreateTaskDataMessage | NavigationMessage;
export type MessageResponseSender = (data: unknown) => void;

export interface IMessage {
  type: string;
}

export interface GetCreateTaskDataMessage {
  type: 'get-create-task-data';
}

export interface NavigationMessage {
  type: 'navigation';
  url: string;
}
