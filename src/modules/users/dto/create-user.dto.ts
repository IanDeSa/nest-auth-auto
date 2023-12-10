// src/app/modules/user/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Permission } from '../enum/enum-permission';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'john_doe', description: 'Nome do usuário' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'password123', description: 'Senha do usuário' })
  @IsString()
  password: string;

  @ApiProperty({
    example: 'john@example.com',
    description: 'E-mail do usuário',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    enum: Permission,
    description: 'Nível de permissão do usuário',
  })
  permission: Permission;
}
