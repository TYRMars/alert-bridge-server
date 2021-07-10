export class EmailDto {
  toUser: string;
  fromUser: string;
  subject: string;
  template: string;
  context: {
    [propName: string]: any;
  };
}
