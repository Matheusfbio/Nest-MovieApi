import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { IsUUIDParam } from 'src/commom/decorators/is-uuidparam/is-uuidparam.decorator';
import { ApiOperation } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({
    operationId: 'User_Post',
    description: 'Metodo que cadastra um novo usuario',
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@IsUUIDParam('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@IsUUIDParam('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@IsUUIDParam('id') id: string) {
    return this.userService.remove(id);
  }
}
