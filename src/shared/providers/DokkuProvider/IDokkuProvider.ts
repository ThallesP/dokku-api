export interface IDokkuProvider {
  runCommand(command: string): Promise<void>;
}

export const IDokkuProvider = Symbol('IDokkuProvider');
