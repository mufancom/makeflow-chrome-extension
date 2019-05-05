import {Message, MessageResponseSender} from '../types';

import {getCreateTaskData} from './task-data-getters';
import {navigate} from './utils';

chrome.runtime.onMessage.addListener(
  (request: Message, _, sendResponse: MessageResponseSender) => {
    switch (request.type) {
      case 'get-create-task-data':
        sendResponse(getCreateTaskData());
        break;
      case 'navigation':
        navigate(request.url);
        sendResponse({});
        break;
    }
  },
);
