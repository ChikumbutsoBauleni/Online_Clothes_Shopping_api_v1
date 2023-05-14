import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entities';


@Controller('Users')
export class UserController{

    constructor(private readonly userService:UserService){}

    @Post()
    async createUser(@Body() user:User): Promise<User>{
        return this.userService.createUser(user);
    } 

    @Get()
    async getUser(userD: User): Promise<User[]>{
        return this.userService.findUserById(userD);
   }
    @Get(':id')
    async getUserById(@Param('id') id: number): Promise<User>{
        return this.userService.getUserById(id);
    }
  
     @Put(':id')
     async updateUser(
        @Param('id') id: number, 
        @Param('name') islegal:string, 
        @Param('email') isUnique:number,
        @Param('password') isMatching:string,
        @Body()userD:User,
     ):Promise<User>{
        return this.userService.updateUser(id,userD);
     }
     @Delete(':id')
    async Delete(@Param('id')id: number): Promise<void>{
        return this.userService.deleteUser(id);
     }


}
