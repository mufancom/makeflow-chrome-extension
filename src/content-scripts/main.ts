import {MessageResponseSender, MessageWithoutResponse} from '../types';

import {getCreateTaskData} from './@task-data-getters';
import {navigate} from './@utils';

chrome.runtime.onMessage.addListener(
  (message: MessageWithoutResponse, _, sendResponse: MessageResponseSender) => {
    switch (message.type) {
      case 'get-create-task-data':
        sendResponse(getCreateTaskData());
        break;
      case 'navigation':
        navigate(message.request.url);
        sendResponse({});
        break;
    }
  },
);
