import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const usernameExists = await this.prismaService.user.findFirst({
      where: {
        username: createUserDto.username,
      },
    });

    if (usernameExists) {
      throw new HttpException('Nome de usuário já existe', HttpStatus.CONFLICT);
    }

    const emailExists = await this.prismaService.user.findFirst({
      where: {
        email: createUserDto.email,
      },
    });

    if (emailExists) {
      throw new HttpException('Email já cadastrado', HttpStatus.CONFLICT);
    }

    const data: CreateUserDto = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };
    const userCreated = await this.prismaService.user.create({ data });
    return {
      ...userCreated,
      password: undefined,
    };
  }

  async findAll() {
    const user = await this.prismaService.user.findMany();
    return user;
  }

  // async findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // async update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // async remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
