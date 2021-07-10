import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { EmailInfo } from './interfaces';

@Injectable()
/**
 * The Email services provides methods,
 * which are Email-related
 */
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}
  private readonly logger = new Logger(EmailService.name);

  /**
   *
   *
   * @private
   * @param {EmailInfo} {
   *     toUser,
   *     fromUser = 'xx@xxx.com',
   *     subject,
   *     template = 'email-default',
   *     context,
   *   }
   * @returns {EmailInfo}
   * @memberof EmailService
   */
  public sendMail({
    toUser,
    fromUser = 'xxx@xxx.com',
    subject,
    template = 'email-default',
    context,
  }: EmailInfo): EmailInfo {
    this.mailerService
      .sendMail({
        to: toUser,
        from: fromUser,
        subject: subject,
        template,
        context,
      })
      .then((success) => {
        this.logger.log(success);
      })
      .catch((err) => {
        this.logger.error(err);
      });
    return {
      toUser,
      fromUser,
      subject,
      template,
      context,
    };
  }
}
