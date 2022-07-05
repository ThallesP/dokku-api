import { Module } from '@nestjs/common';
import { IDokkuProvider } from '../../../../shared/providers/DokkuProvider/IDokkuProvider';
import { CreateDatabaseUseCase } from '../../useCases/createDatabase/CreateDatabaseUseCase';
import { CreateDatabaseController } from '../../useCases/createDatabase/CreateDatabaseController';
import { ConfigModule } from '@nestjs/config';
import { DokkuDaemonProvider } from '../../../../shared/providers/DokkuProvider/implementations/DokkuDaemonProvider';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [CreateDatabaseController],
  providers: [
    //UseCases
    CreateDatabaseUseCase,

    //Providers
    {
      provide: IDokkuProvider,
      useClass: DokkuDaemonProvider,
    },
  ],
})
export class DatabasesModule {}
