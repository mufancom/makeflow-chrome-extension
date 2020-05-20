import {CreateTaskData} from '../../types';

export function getDefaultTaskData(): CreateTaskData {
  return {
    brief: document.title.trim(),
    outputs: [
      {
        name: 'metadata_source',
        value: {
          type: 'raw',
          value: {
            type: 'unknown',
            url: location.href,
          },
        },
      },
    ],
  };
}
