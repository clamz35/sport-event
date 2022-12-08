import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventController } from './controllers/event.controller';
import { GroupController } from './controllers/group.controller';

@Module({
  imports: [MikroOrmModule.forRoot()],
  controllers: [AppController, EventController, GroupController],
  providers: [AppService],
})
export class AppModule {}
