import { Inject, Injectable } from '@nestjs/common';
import { ICreateDatabaseDTO } from '../../dtos/ICreateDatabaseDTO';
import { IDokkuProvider } from '../../../../shared/providers/DokkuProvider/IDokkuProvider';

@Injectable()
export class CreateDatabaseUseCase {
  constructor(@Inject(IDokkuProvider) private dokkuProvider: IDokkuProvider) {}

  async execute({ type, name, appLink, restartApp }: ICreateDatabaseDTO) {
    await this.dokkuProvider.runCommand(`${type}:create ${name}`, true);

    if (appLink) {
      await this.dokkuProvider.runCommand(
        `${type}:link ${name} ${appLink}${restartApp ? ' --no-restart' : ''}`,
        true,
      );
    }

    return { type, name };
  }
}
