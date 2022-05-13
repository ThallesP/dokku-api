import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { IDokkuProvider } from '../../../../shared/providers/DokkuProvider/IDokkuProvider';

@Injectable()
export class FindAppUseCase {
  constructor(@Inject(IDokkuProvider) private dokkuProvider: IDokkuProvider) {}

  async execute(app_name: string) {
    const apps = await this.dokkuProvider.listApps();

    const appExists = apps.find((app) => app == app_name);

    if (!appExists) {
      throw new NotFoundException();
    }

    return { name: app_name };
  }
}
