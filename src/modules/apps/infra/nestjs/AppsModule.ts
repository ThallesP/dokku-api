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
import { SetAppConfigurationController } from '../../useCases/setAppConfiguration/SetAppConfigurationController';
import { SetAppConfigurationUseCase } from '../../useCases/setAppConfiguration/SetAppConfigurationUseCase';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    CreateAppController,
    FindAppController,
    SyncAppWithGitController,
    SetAppConfigurationController,
  ],
  providers: [
    //UseCases
    CreateAppUseCase,
    FindAppUseCase,
    SyncAppWithGitUseCase,
    SetAppConfigurationUseCase,

    // Providers
    {
      provide: IDokkuProvider,
      useClass: DokkuDaemonProvider,
    },
  ],
})
export class AppsModule {}
