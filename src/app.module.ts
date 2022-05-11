import { Module } from '@nestjs/common';
import { AppsModule } from './modules/apps/infra/nestjs/AppsModule';
import { ConfigModule } from '@nestjs/config';
import { DatabasesModule } from './modules/databases/useCases/infra/nestjs/DatabasesModule';

@Module({
  imports: [ConfigModule.forRoot(), AppsModule, DatabasesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
