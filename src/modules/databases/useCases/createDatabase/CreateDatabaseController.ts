import { Body, Controller, Post } from '@nestjs/common';
import { ICreateDatabaseDTO } from '../../dtos/ICreateDatabaseDTO';
import { CreateDatabaseUseCase } from './CreateDatabaseUseCase';

@Controller('/databases')
export class CreateDatabaseController {
  constructor(private createDatabaseUseCase: CreateDatabaseUseCase) {}

  @Post()
  async handle(@Body() createDatabaseDTO: ICreateDatabaseDTO) {
    return await this.createDatabaseUseCase.execute(createDatabaseDTO);
  }
}
