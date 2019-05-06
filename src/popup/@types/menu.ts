export interface Menu {
  text: string;
  handler(): Promise<void>;
}
