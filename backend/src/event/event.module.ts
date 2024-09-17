import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { DataSource } from 'typeorm';
import { Event } from './event.entity';
import { EventRepository } from './event.repository';

@Module({
  providers: [
    EventService,
    {
      provide: 'EventRepository',
      useFactory: (dataSource: DataSource) => {
        return dataSource.getRepository(Event).extend(EventRepository);
      },
      inject: [DataSource],
    },
  ],
  controllers: [EventController],
  exports: [EventService],
})
export class EventModule {}
