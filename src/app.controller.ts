import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { IsPublic } from './modules/auth/decorators/is-public.decorator';
import { CurrentUser } from './modules/auth/decorators/current-user.decorator';
import { User } from './modules/users/entities/user.entity';

@ApiTags('home')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @IsPublic()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('me')
  getMe(@CurrentUser() user: User) {
    return user;
  }
}
