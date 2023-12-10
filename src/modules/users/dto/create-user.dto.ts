import { User } from '../entities/user.entity';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Permission } from '../enum/enum-permission';
import { IsPassword } from 'src/middlewares/validators/password.validator';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsPassword({ message: 'A senha deve atender aos critérios especificados.' })
  password: string;

  @IsString()
  username: string;

  @IsString()
  permission: Permission;
}
