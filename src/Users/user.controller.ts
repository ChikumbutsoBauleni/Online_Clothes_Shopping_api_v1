import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entities';
import { ApiTags } from '@nestjs/swagger';
import { AuthenticationGuard } from 'src/utility/guards/authentication.guards';
import { AuthorizeRoles } from 'src/utility/decorators/authorize-roles.decorators';
import { AuthorizeGuards } from 'src/utility/guards/authorization.guards';



@ApiTags('USERS/ SignUp')
@Controller('Users')
export class UserController{

    constructor(private readonly userService:UserService){}

    @Post("SignUp")
    async createUser(@Body() user:User): Promise<User>{
        return this.userService.createUser(user);
    } 

    @AuthorizeRoles('Roles.ADMIN')
    @UseGuards(AuthenticationGuard,AuthorizeGuards)
    @Get()
    async findAll(): Promise<User[]>{
        return await this.userService.findAll();
   }

   @UseGuards(AuthenticationGuard)
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

