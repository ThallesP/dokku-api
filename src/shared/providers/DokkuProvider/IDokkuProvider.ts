export interface IDokkuProvider {
  runCommand(command: string): Promise<void>;
  listApps(): Promise<string[]>;
}

export const IDokkuProvider = Symbol('IDokkuProvider');
