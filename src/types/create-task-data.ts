export interface ValueDescriptor {
  type: 'raw';
  value: unknown;
}

export interface CreateTaskDataOutput {
  name: string;
  value: ValueDescriptor;
}

export interface CreateTaskData {
  brief?: string;
  outputs?: CreateTaskDataOutput[];
}
