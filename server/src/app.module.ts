import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrackModule } from './track/track.module';
import { UserModule } from './user/user.module';
import { PlaylistModule } from './playlist/playlist.module';

@Module({
  imports: [TrackModule, UserModule, PlaylistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
