import { Inject, Injectable } from '@nestjs/common';
import { Guest } from './guest.entity';
import { GuestRepository } from './guest.repository';
import { EventService } from 'src/event/event.service';

@Injectable()
export class GuestService {
    constructor(
        @Inject('GuestRepository') private guestRepository: GuestRepository,
        private eventService: EventService
      ) {}

    public async create(newGuest: Guest) {
        const guest = await this.guestRepository.create(newGuest);
        await this.guestRepository.save(guest);

        await this.eventService.addEvent(guest);
    }

    public async list(){
        const guests = await this.guestRepository.find();
        return guests;
    }
}
