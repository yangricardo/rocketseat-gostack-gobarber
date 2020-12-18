import AppError from '@shared/errors/AppError';
import FakeMailProvider from '@shared/container/providers/MailProvider/fakes/FakeMailProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import SendForgotPasswordEmailService from './SendForgotPasswordEmailService';

describe('SendForgotPasswordEmail', () => {
  const fakeUsersRepository = new FakeUsersRepository();
  const fakeMailProvider = new FakeMailProvider();
  const sendMail = jest.spyOn(fakeMailProvider, 'sendMail');

  const sendForgotPasswordEmailService = new SendForgotPasswordEmailService(
    fakeUsersRepository,
    fakeMailProvider,
  );

  it('should be able to recover password using the email', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await sendForgotPasswordEmailService.execute({
      email: 'johndoe@example.com',
    });

    expect(sendMail).toHaveBeenCalled();
  });

  it('should not be able to recover a non-existing user password', async () => {
    await expect(
      sendForgotPasswordEmailService.execute({
        email: 'johndoe@example.com',
      }),
    ).toBeInstanceOf(AppError);
  });
});
