import { Body, Controller, Put } from '@nestjs/common';
import { ISetAppConfigurationDTO } from '../../dtos/ISetAppConfigurationDTO';
import { SetAppConfigurationUseCase } from './SetAppConfigurationUseCase';

@Controller('/apps/config')
export class SetAppConfigurationController {
  constructor(private setAppConfigurationUseCase: SetAppConfigurationUseCase) {}

  @Put()
  async handle(@Body() setAppConfigurationDTO: ISetAppConfigurationDTO) {
    await this.setAppConfigurationUseCase.execute(setAppConfigurationDTO);
  }
}
