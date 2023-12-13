import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiConflictResponse,
  ApiBody,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Buscar todos os usuários',
    description: 'Retorna todos os usuários do banco de dados.',
  })
  async findAll() {
    return this.usersService.findAll();
  }

  @Post()
  @IsPublic()
  @ApiOperation({
    summary: 'Criar novo usuário',
    description: 'Cria um novo usuário com base nos dados fornecidos.',
  })
  @ApiBody({ type: CreateUserDto })
  @ApiCreatedResponse({ description: 'Usuário criado com sucesso.' })
  @ApiConflictResponse({
    description: 'Falha na validação ou usuário já existente.',
  })
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Deleta um usuário pelo id',
    description: 'Retorna uma mensagem de sucesso',
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
