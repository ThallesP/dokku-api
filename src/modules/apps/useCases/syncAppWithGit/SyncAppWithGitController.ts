import { Body, Controller, Param, Put } from '@nestjs/common';
import { ISyncAppWithGitDTO } from '../../dtos/ISyncAppWithGitDTO';
import { SyncAppWithGitUseCase } from './SyncAppWithGitUseCase';

@Controller('/apps/:name/git')
export class SyncAppWithGitController {
  constructor(private syncAppWithGitUseCase: SyncAppWithGitUseCase) {}

  @Put()
  async handle(
    @Param('name') app_name: string,
    @Body() syncAppWithGitDTO: ISyncAppWithGitDTO,
  ) {
    await this.syncAppWithGitUseCase.execute(app_name, syncAppWithGitDTO);
  }
}
