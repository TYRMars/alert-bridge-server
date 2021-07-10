import { Controller, Post, Body } from '@nestjs/common';
import { EmailDto } from './dtos';
import { EmailService } from './email.service';

/**
 * The Email-Controller, which is the API
 * interface for Email.
 */
@Controller('/api/v0/email')
export class EmailController {
  constructor(private EmailService: EmailService) {}

  @Post('/sent')
  /**
   * @description:
   * @param {type}
   * @return:
   */
  async sentSentry(@Body() EmailDto: EmailDto) {
    try {
      const { toUser, fromUser, subject, template, context } = EmailDto;
      this.EmailService.sendMail({
        toUser,
        fromUser,
        subject,
        template,
        context,
      });
      return {
        toUser,
        template,
      };
    } catch (err) {
      throw new Error(err);
    }
  }
}
