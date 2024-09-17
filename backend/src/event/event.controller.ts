import { Controller, Put } from '@nestjs/common';
import { EventService } from './event.service';

@Controller('event')
export class EventController {
    constructor(private eventService: EventService) {}

    @Put('check-in')
    public doCheckIn(sourceBarcode: string)
    {
        return this.eventService.doCheckIn(sourceBarcode);
    }

    @Put('check-out')
    public doCheckOut(sourceBarcode: string)
    {
        return this.eventService.doCheckOut(sourceBarcode);
    }
}
