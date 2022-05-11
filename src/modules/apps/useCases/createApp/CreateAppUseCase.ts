import { Inject, Injectable } from '@nestjs/common';
import { IDokkuProvider } from '../../../../shared/providers/DokkuProvider/IDokkuProvider';
import { ICreateAppDTO } from '../../dtos/ICreateAppDTO';

@Injectable()
export class CreateAppUseCase {
  constructor(@Inject(IDokkuProvider) private dokkuProvider: IDokkuProvider) {}

  async execute({ name }: ICreateAppDTO) {
    await this.dokkuProvider.runCommand(`apps:create ${name}`);

    return { name };
  }
}
