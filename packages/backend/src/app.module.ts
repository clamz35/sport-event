import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventController } from './controllers/event.controller';
import { GroupController } from './controllers/group.controller';
import { EventService } from './services/event/event.service';

@Module({
  imports: [MikroOrmModule.forRoot()],
  controllers: [AppController, EventController, GroupController],
  providers: [AppService, EventService],
})
export class AppModule {}
