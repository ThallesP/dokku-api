import { Inject, Injectable } from '@nestjs/common';
import { IDokkuProvider } from '../../../../shared/providers/DokkuProvider/IDokkuProvider';

interface ISetAppConfiguration {
  configVars: string[];
  restartApp?: boolean;
}

@Injectable()
export class SetAppConfigurationUseCase {
  constructor(@Inject(IDokkuProvider) private dokkuProvier: IDokkuProvider) {}

  async execute({ restartApp = true, configVars }: ISetAppConfiguration) {
    for (const configVar of configVars) {
      const indexPlusOne = configVars.indexOf(configVar) + 1;

      if (indexPlusOne == configVars.length && restartApp) {
        await this.dokkuProvier.runCommand(`config:set ${configVar}`);
        continue;
      }

      await this.dokkuProvier.runCommand(
        `config:set --no-restart ${configVar}`,
      );
    }
  }
}
