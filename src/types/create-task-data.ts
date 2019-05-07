import {Dict} from 'tslang';

export interface CreateTaskData {
  brief?: string;
  metadata?: Dict<unknown>;
}
