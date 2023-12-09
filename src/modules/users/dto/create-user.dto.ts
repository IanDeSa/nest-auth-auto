// src/app/modules/user/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Permission } from '../enum/enum-permission';

export class CreateUserDto {
  @ApiProperty({ example: 'john_doe', description: 'Nome do usuário' })
  username: string;

  @ApiProperty({ example: 'password123', description: 'Senha do usuário' })
  password: string;

  @ApiProperty({
    enum: Permission,
    description: 'Nível de permissão do usuário',
  })
  permission: Permission;
}
