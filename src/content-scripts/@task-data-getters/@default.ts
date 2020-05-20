import {CreateTaskData} from '../../types';

export function getDefaultTaskData(): CreateTaskData {
  return {
    brief: document.title.trim(),
    outputs: {
      metadata_source: {
        type: 'raw',
        value: {
          type: 'unknown',
          url: location.href,
        },
      },
    },
  };
}
