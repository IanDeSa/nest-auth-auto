import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: CreateUserDto) {
    const usernameExists = await this.prismaService.user.findFirst({
      where: {
        username: data.username,
      },
    });

    if (usernameExists) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    const user = await this.prismaService.user.create({ data });
    return user;
  }

  // async findAll() {
  //   return `This action returns all users`;
  // }

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
