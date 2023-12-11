import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsPassword } from 'src/middlewares/validators/password.validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/users/entities/user.entity';

export class LoginRequestBodyDto extends User {
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
}
