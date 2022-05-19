import { Inject, Injectable } from '@nestjs/common';
import { IDokkuProvider } from '../../../../shared/providers/DokkuProvider/IDokkuProvider';
import { ISyncAppWithGitDTO } from '../../dtos/ISyncAppWithGitDTO';

@Injectable()
export class SyncAppWithGitUseCase {
  constructor(@Inject(IDokkuProvider) private dokkuProvider: IDokkuProvider) {}

  async execute(app_name: string, { git_url, ref }: ISyncAppWithGitDTO) {
    await this.dokkuProvider.runCommand(
      `git:sync ${app_name} ${git_url} ${ref}`,
    );
  }
}
