import {Dict} from 'tslang';

export interface ValueDescriptor {
  type: 'raw';
  value: unknown;
}

export interface CreateTaskData {
  brief?: string;
  outputs?: Dict<ValueDescriptor>;
}
