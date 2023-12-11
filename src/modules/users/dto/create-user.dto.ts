import { User } from '../entities/user.entity';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Permission } from '../enum/enum-permission';
import { IsPassword } from 'src/modules/auth/validators/password.validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto extends User {
  @IsEmail()
  @ApiProperty({
    example: 'user@example.com',
    description: 'O endereço de e-mail do usuário',
  })
  email: string;

  @IsString()
  @ApiProperty({
    example: 'Password123@',
    description: 'A senha do usuário',
  })
  @IsNotEmpty()
  @IsPassword({ message: 'A senha deve atender aos critérios especificados.' })
  password: string;

  @IsString()
  @ApiProperty({
    example: 'Usuário Inicial',
    description: 'O nome do usuário',
  })
  username: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Visualizador',
    description: 'Nível de permissão do usuário',
  })
  permission: Permission;
}
