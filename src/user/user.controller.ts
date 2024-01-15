import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel} from '@prisma/client';
import { User } from './entities/user.entity';


@Controller('user')
export class UserController {
  // constructor(private readonly userService: UserService) {}
  constructor(private readonly userService: UserService) {}

  @Post()
  async signupUser(
    @Body() User,
  ): Promise<UserModel> {
    return this.userService.createUser(User);
  }

  @Get()
  async getAllUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }



  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
