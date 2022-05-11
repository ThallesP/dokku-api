import { Body, Controller, Post } from '@nestjs/common';
import { CreateAppUseCase } from './CreateAppUseCase';
import { ICreateAppDTO } from '../../dtos/ICreateAppDTO';
import { CreateAppMapper } from '../../mappers/CreateAppMapper';

@Controller('/apps')
export class CreateAppController {
  constructor(private createAppUseCase: CreateAppUseCase) {}

  @Post()
  async handle(@Body() createAppDTO: ICreateAppDTO) {
    const app = await this.createAppUseCase.execute(createAppDTO);

    return CreateAppMapper.toMapper(app);
  }
}
