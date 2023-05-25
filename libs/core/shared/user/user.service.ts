import { Injectable } from '@nestjs/common';

import type { User } from './user.interface';

@Injectable()
export class UserService {
  public async fetch(username: string): Promise<User & { password: string }> {
    return Promise.resolve({
      id: '123',
      password: 'admins1357',
      name: username,
      email: `${username}@test.com`,
      roles: ['test'], // ['admin', 'etc', ...]
    });
  }
}
