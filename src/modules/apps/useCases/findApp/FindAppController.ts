import { Controller, Get, Param } from '@nestjs/common';
import { FindAppUseCase } from './FindAppUseCase';

@Controller('/apps/:name')
export class FindAppController {
  constructor(private findAppUseCase: FindAppUseCase) {}

  @Get()
  async handle(@Param('name') name: string) {
    await this.findAppUseCase.execute(name);
  }
}
