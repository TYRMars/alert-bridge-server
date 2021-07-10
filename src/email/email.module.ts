import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';

@Module({
  controllers: [EmailController],
  providers: [EmailService],
  exports: [EmailService],
})
/**
 * The EmailModule, which bundles all
 * operational or processable searche related
 * modules, controllers and components
 */
export class EmailModule {}
