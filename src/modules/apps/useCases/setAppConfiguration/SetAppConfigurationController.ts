import { Body, Controller, Param, Put } from '@nestjs/common';
import { ISetAppConfigurationDTO } from '../../dtos/ISetAppConfigurationDTO';
import { SetAppConfigurationUseCase } from './SetAppConfigurationUseCase';

@Controller('/apps/:name/config')
export class SetAppConfigurationController {
  constructor(private setAppConfigurationUseCase: SetAppConfigurationUseCase) {}

  @Put()
  async handle(
    @Param('name') name: string,
    @Body() setAppConfigurationDTO: ISetAppConfigurationDTO,
  ) {
    await this.setAppConfigurationUseCase.execute({
      ...setAppConfigurationDTO,
      appName: name,
    });
  }
}
