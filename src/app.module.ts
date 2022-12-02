import { Module } from '@nestjs/common';
import { UserModule } from './modules/cat/user.module';
import { ProfileModule } from './modules/profile/profile.module';

@Module({
  imports: [UserModule, ProfileModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
