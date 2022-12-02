import { Module } from '@nestjs/common';
import { CatModule } from './modules/cat/cat.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [CatModule, ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
