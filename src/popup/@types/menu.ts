export interface MenuItem {
  text: string;
  handler(): Promise<void>;
}
