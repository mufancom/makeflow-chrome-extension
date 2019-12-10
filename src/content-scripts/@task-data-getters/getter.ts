import {CreateTaskData} from '../../types';

import {getDefaultTaskData} from './@default';
import {getGitHubTaskData} from './@github';
import {getGitLabTaskData} from './@gitlab';

type TaskDataGetter = () => CreateTaskData | undefined;

const taskDataGetters: TaskDataGetter[] = [
  getGitHubTaskData,
  getGitLabTaskData,
  getDefaultTaskData,
];

export function getCreateTaskData(): CreateTaskData {
  let result: CreateTaskData | undefined;

  for (let getter of taskDataGetters) {
    let data = getter();

    if (data !== undefined) {
      result = data;
      break;
    }
  }

  return result!;
}
