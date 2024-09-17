import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) { }

    public async sendbarEmail(sourceBarcode: string, fullName: string, to: string) {
        const mailBoxName = process.env.EMAIL_NAME;
        const mailBoxAddress = '<' + process.env.EMAIL_ADDRESS + '>';
        const from = `${mailBoxName} ${mailBoxAddress}`;

        const subject = 'Acesso ao evento ✔';

        const templatePath = process.env.TEMPLATE_PATH;
        const template = `${templatePath}barcode`;

        const name = fullName.split(' ')[0];

        return this
            .mailerService
            .sendMail({
                to,
                from,
                subject,
                template,
                context: {
                    name,
                    sourceBarcode
                }
            })
            .then((success) => success)
            .catch((err) => err);
    }
}
