import IMailProvider from '../implementations/IMailProvider';

interface IMessage {
  to: string;
  body: string;
}

export class FakeMailProvider implements IMailProvider {
  private messages: IMessage[] = [];

  async sendMail(to: string, body: string): Promise<void> {
    this.messages.push({ to, body });
  }
}

export default FakeMailProvider;
