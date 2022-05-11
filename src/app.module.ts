import { Module } from '@nestjs/common';
import { AppsModule } from './modules/apps/infra/nestjs/AppsModule';
import { ConfigModule } from '@nestjs/config';
import { DatabasesModule } from './modules/databases/useCases/infra/nestjs/DatabasesModule';
import { APP_GUARD } from '@nestjs/core';
import { APITokenGuard } from './shared/infra/nestjs/guards/APITokenGuard';

@Module({
  imports: [ConfigModule.forRoot(), AppsModule, DatabasesModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: APITokenGuard,
    },
  ],
})
export class AppModule {}
