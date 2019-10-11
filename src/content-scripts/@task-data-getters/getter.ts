import {CreateTaskData} from '../../types';

import {getGitHubIssueTitle} from './@github';
import {getGitLabIssueTitle} from './@gitlab';

type TaskBriefGetter = () => string | undefined;

const taskBriefGetters: TaskBriefGetter[] = [
  getGitHubIssueTitle,
  getGitLabIssueTitle,
];

export function getCreateTaskData(): CreateTaskData {
  let brief: string | undefined;

  for (let getter of taskBriefGetters) {
    let result = getter();

    if (result !== undefined) {
      brief = result;
      break;
    }
  }

  return {
    brief: brief && brief.trim(),
    outputs: [
      {
        name: 'task-ref',
        value: {
          type: 'raw',
          value: document.URL,
        },
      },
    ],
  };
}
