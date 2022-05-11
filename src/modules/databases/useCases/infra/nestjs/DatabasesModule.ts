import { Module } from '@nestjs/common';
import { IDokkuProvider } from '../../../../../shared/providers/DokkuProvider/IDokkuProvider';
import { DokkuCLIProvider } from '../../../../../shared/providers/DokkuProvider/implementations/DokkuCLIProvider';
import { CreateDatabaseUseCase } from '../../createDatabase/CreateDatabaseUseCase';
import { CreateDatabaseController } from '../../createDatabase/CreateDatabaseController';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [CreateDatabaseController],
  providers: [
    //UseCases
    CreateDatabaseUseCase,

    //Providers
    {
      provide: IDokkuProvider,
      useClass: DokkuCLIProvider,
    },
  ],
})
export class DatabasesModule {}
