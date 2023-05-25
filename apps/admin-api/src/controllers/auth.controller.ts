import {
  Controller,
  Get,
  Post,
  UseGuards,
  Req,
  Res,
  UnauthorizedException,
  Body,
} from '@nestjs/common';
import type { Request, Response } from 'express';

import { LocalLoginGuard, Payload } from 'libs/core/auth';

@Controller('auth')
export class AuthController {
  constructor() {}

  /**
   * See test/e2e/local-auth.spec.ts
   * need username, password in body
   * skip guard to @Public when using global guard
   */
  @Post('login')
  @UseGuards(LocalLoginGuard)
  public login(user: Payload): any {
    return {
      statusCode: 200,
      data: {
        ...user,
        accessToken: '',
        refreshToken: '',
      },
      errors: null,
      message: 'OK',
    };
  }

  //   @Get('logout')
  //   public logout(@Req() req: Request, @Res() res: Response): void {
  //     req.logout(() => {
  //       res.redirect('/');
  //     });
  //   }

  //   @Get('check')
  //   @UseGuards(AuthenticatedGuard)
  //   public check(@ReqUser() user: Payload): Payload {
  //     return user;
  //   }

  //   /**
  //    * See test/e2e/jwt-auth.spec.ts
  //    */
  //   @UseGuards(LocalAuthGuard)
  //   @Post('jwt/login')
  //   public jwtLogin(@ReqUser() user: Payload): JwtSign {
  //     return this.auth.jwtSign(user);
  //   }

  //   @UseGuards(JwtAuthGuard)
  //   @Get('jwt/check')
  //   public jwtCheck(@ReqUser() user: Payload): Payload {
  //     return user;
  //   }

  //   // Only verify is performed without checking the expiration of the access_token.
  //   @UseGuards(JwtVerifyGuard)
  //   @Post('jwt/refresh')
  //   public jwtRefresh(@ReqUser() user: Payload, @Body('refresh_token') token?: string): JwtSign {
  //     if (!token || !this.auth.validateRefreshToken(user, token)) {
  //       throw new UnauthorizedException('InvalidRefreshToken');
  //     }

  //     return this.auth.jwtSign(user);
  //   }
}
