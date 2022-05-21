import { Module } from '@nestjs/common';
import { IDokkuProvider } from '../../../../shared/providers/DokkuProvider/IDokkuProvider';
import { CreateAppController } from '../../useCases/createApp/CreateAppController';
import { CreateAppUseCase } from '../../useCases/createApp/CreateAppUseCase';
import { ConfigModule } from '@nestjs/config';
import { FindAppController } from '../../useCases/findApp/FindAppController';
import { SyncAppWithGitUseCase } from '../../useCases/syncAppWithGit/SyncAppWithGitUseCase';
import { SyncAppWithGitController } from '../../useCases/syncAppWithGit/SyncAppWithGitController';
import { FindAppUseCase } from '../../useCases/findApp/FindAppUseCase';
import { DokkuDaemonProvider } from '../../../../shared/providers/DokkuProvider/implementations/DokkuDaemonProvider';

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
      useClass: DokkuDaemonProvider,
    },
  ],
})
export class AppsModule {}
