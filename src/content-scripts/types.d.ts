interface History {
  push(path: string): Promise<void>;
}

declare const _history: History;
