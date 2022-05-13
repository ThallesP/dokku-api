import { IDokkuProvider } from '../IDokkuProvider';
import { execSync } from 'child_process';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DokkuCLIProvider implements IDokkuProvider {
  private readonly DOKKU_CLI_PATH: string;

  constructor(private configService: ConfigService) {
    this.DOKKU_CLI_PATH = configService.get('DOKKU_CLI_PATH');
  }

  async listApps() {
    const stdout = execSync(`${this.DOKKU_CLI_PATH} apps:list`);

    return stdout
      .toString()
      .split('\n')
      .filter((appLine) => appLine !== '=====> My Apps');
  }

  async runCommand(command: string): Promise<void> {
    execSync(`${this.DOKKU_CLI_PATH} ${command}`);
  }
}
