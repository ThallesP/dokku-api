import { Module } from '@nestjs/common';
import { IDokkuProvider } from '../../../../shared/providers/DokkuProvider/IDokkuProvider';
import { DokkuCLIProvider } from '../../../../shared/providers/DokkuProvider/implementations/DokkuCLIProvider';
import { CreateAppController } from '../../useCases/createApp/CreateAppController';
import { CreateAppUseCase } from '../../useCases/createApp/CreateAppUseCase';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [CreateAppController],
  providers: [
    //UseCases
    CreateAppUseCase,

    // Providers
    {
      provide: IDokkuProvider,
      useClass: DokkuCLIProvider,
    },
  ],
})
export class AppsModule {}
