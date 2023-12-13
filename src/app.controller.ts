import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IsPublic } from './modules/auth/decorators/is-public.decorator';
import { CurrentUser } from './modules/auth/decorators/current-user.decorator';
import { User } from './modules/users/entities/user.entity';

@ApiTags('home')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @IsPublic()
  @ApiOperation({
    summary: 'Retorna a porta que o projeto está',
    description: 'Retorna uma mensagem de boas-vindas e a porta',
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('me')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Retorna as informações do usuário',
    description:
      'Retorna as informações do usuário como id, email, nome do usuário e nível de acesso',
  })
  getMe(@CurrentUser() user: User) {
    return user;
  }
}
