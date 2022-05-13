import { Module } from '@nestjs/common';
import { IDokkuProvider } from '../../../../shared/providers/DokkuProvider/IDokkuProvider';
import { DokkuCLIProvider } from '../../../../shared/providers/DokkuProvider/implementations/DokkuCLIProvider';
import { CreateAppController } from '../../useCases/createApp/CreateAppController';
import { CreateAppUseCase } from '../../useCases/createApp/CreateAppUseCase';
import { ConfigModule } from '@nestjs/config';
import { FindAppController } from '../../useCases/findApp/FindAppController';
import { SyncAppWithGitUseCase } from '../../useCases/syncAppWithGit/SyncAppWithGitUseCase';
import { SyncAppWithGitController } from '../../useCases/syncAppWithGit/SyncAppWithGitController';
import { FindAppUseCase } from '../../useCases/findApp/FindAppUseCase';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    CreateAppController,
    FindAppController,
    SyncAppWithGitController,
  ],
  providers: [
    //UseCases
    CreateAppUseCase,
    FindAppUseCase,
    SyncAppWithGitUseCase,

    // Providers
    {
      provide: IDokkuProvider,
      useClass: DokkuCLIProvider,
    },
  ],
})
export class AppsModule {}
