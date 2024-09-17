import { Body, Controller, Post } from '@nestjs/common';
import { GuestService } from './guest.service';

@Controller('guest')
export class GuestController {
    constructor(private guestService: GuestService) {}

    @Post()
    CreateGuest(@Body() data: any){
        return this.guestService.create(data);
    }
}
