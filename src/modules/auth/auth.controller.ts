import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiBody({
    description: 'Corpo da solicitação para login de usuário',
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'user@example.com' },
        password: { type: 'string', example: 'Password123@' },
      },
    },
  })
  @UseGuards(LocalAuthGuard)
  @ApiResponse({ status: 200, description: 'Login bem-sucedido' })
  @ApiTags('login')
  async login(@Body() loginData: { email: string; password: string }) {
    return await this.authService.validateUser(
      loginData.email,
      loginData.password,
    );
  }
}
