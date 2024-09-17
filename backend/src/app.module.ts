import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestModule } from './guest/guest.module';
import { EventModule } from './event/event.module';
import { Guest } from './guest/guest.entity';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot(), 
    MailerModule.forRoot({
      transport: {
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT),
          secure: false,
          auth: {
              user: process.env.EMAIL_ADDRESS,
              pass: process.env.EMAIL_PASS,
          },
      },
      defaults: {
          from: process.env.EMAIL_NAME + ' <' + process.env.EMAIL_ADDRESS + '>',
      },
      template: {
          dir: process.env.TEMPLATE_PATH,
          adapter: new HandlebarsAdapter(),
          options: {
              strict: true,
          }
      },
  }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 
      process.env.NODE_ENV === 'test'
      ? "./src/database/database.test.db"
      : "./dist/database/dinex.db",      
      logging: true,
      synchronize: true,
      entities: [Guest, Event],
      migrationsTableName: 'migrations_table',
      migrations: [
          "./src/database/migrations/**.ts"
      ],           
    }),
    GuestModule,
    EventModule,
    EmailModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}

// visitante
// endpoint pro cadastro de visitante - OK

// evento
// endpoint pra listar visitantes - OK
// endpoint para marcar check-in
// endpoint para marcar checkout
