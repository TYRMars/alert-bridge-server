import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/v0')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/viewRender')
  @Render('email')
  viewRender() {
    return {
      name: 'Hello world!',
      top_ten_issues: [
        {
          id: 1,
          permalink: 'http://xxxx.com',
          title: '测试Title',
          shortId: 1,
          userCount: 10,
        },
        {
          id: 2,
          permalink: 'http://xxxx.com',
          title: '测试Title',
          shortId: 2,
          userCount: 20,
        },
      ],
    };
  }
}
