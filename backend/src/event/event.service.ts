import { Inject, Injectable } from '@nestjs/common';
import { EventRepository } from './event.repository';
import { EmailService } from 'src/email/email.service';
import { Guest } from 'src/guest/guest.entity';

@Injectable()
export class EventService {
    constructor(
        @Inject('EventRepository') private eventRepository: EventRepository,
        private emailService: EmailService
      ) {}    

    public async addEvent(guest: Guest) {
        const sourceBarcode = this.generateRandomString(6);

        const event = await this.eventRepository.create({
            guest_id: guest.id,
            source_barcode: sourceBarcode,
        });

        await this.emailService.sendbarEmail(event.source_barcode, guest.full_name, guest.email);
    }

    public async doCheckIn(sourceBarcode: string) {
        const checkInDate = new Date();

        const event = await this.eventRepository.findOneBy({ source_barcode: sourceBarcode });

        event.check_in_date = checkInDate;
        const updatedEvent = await this.eventRepository.save(event)
    }

    public async doCheckOut(sourceBarcode: string) {
        const checkOutDate = new Date();

        const event = await this.eventRepository.findOneBy({ source_barcode: sourceBarcode });

        event.check_out_date = checkOutDate;
        const updatedEvent = await this.eventRepository.save(event)
    }

    private generateRandomString(length: number): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        const charactersLength = characters.length;
        
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        
        return result;
      }
}
