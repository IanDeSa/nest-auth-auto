import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest.model';
import { IsPublic } from './decorators/is-public.decorator';
import { LoginRequestBodyDto } from './models/LoginRequest.model';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @IsPublic()
  @ApiBody({
    description: 'Corpo da solicitação para login de usuário',
    type: LoginRequestBodyDto,
  })
  @UseGuards(LocalAuthGuard)
  @ApiResponse({ status: 200, description: 'Login bem-sucedido' })
  @ApiTags('login')
  async login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }
}
