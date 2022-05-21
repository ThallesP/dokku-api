export interface IDokkuProvider {
  runCommand(command: string, waitForCommandToEnd?: boolean): Promise<void>;
  listApps(): Promise<string[]>;
}

export const IDokkuProvider = Symbol('IDokkuProvider');
