import { Module } from '@nestjs/common';
import { GuestService } from './guest.service';
import { GuestController } from './guest.controller';
import { DataSource } from 'typeorm';
import { Guest } from './guest.entity';
import { GuestRepository } from './guest.repository';

@Module({
  providers: [
    GuestService, 
    {
      provide: 'GuestRepository',
      useFactory: (dataSource: DataSource) => {
        return dataSource.getRepository(Guest).extend(GuestRepository);
      },
      inject: [DataSource],
    },
],
  controllers: [GuestController],
  exports: ['GuestRepository'],
})
export class GuestModule {}
