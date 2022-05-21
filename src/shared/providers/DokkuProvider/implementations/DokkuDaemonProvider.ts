import { Injectable } from '@nestjs/common';
import { IDokkuProvider } from '../IDokkuProvider';
import net, { Socket } from 'net';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DokkuDaemonProvider implements IDokkuProvider {
  private readonly DOKKU_DAEMON_SOCKET_PATH: string;

  constructor(configService: ConfigService) {
    this.DOKKU_DAEMON_SOCKET_PATH = configService.get(
      'DOKKU_DAEMON_SOCKET_PATH',
    );
  }

  async listApps(): Promise<string[]> {
    const socket = await this.connectToSocket();

    socket.write('apps:list\n');

    const data = await this.waitUntilData(socket);
    socket.end();

    return data.split('\n').filter((appLine) => appLine !== '=====> My Apps');
  }

  async runCommand(
    command: string,
    waitForCommandToEnd?: boolean,
  ): Promise<void> {
    const socket = await this.connectToSocket();

    socket.write(`${command}\n`);

    if (waitForCommandToEnd) {
      await this.waitUntilData(socket);
      socket.end();
    }
  }

  private connectToSocket(): Promise<Socket> {
    const socket = net.createConnection(this.DOKKU_DAEMON_SOCKET_PATH);

    return new Promise<Socket>((resolve, reject) => {
      socket.once('connect', () => resolve(socket));

      socket.once('error', (err) => reject(err));
    });
  }

  private waitUntilData(socket: Socket): Promise<string> {
    return new Promise<string>((resolve) => {
      socket.once('data', (data) => resolve(data.toString()));
    });
  }
}
