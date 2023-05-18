import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthLoginDto } from "./auth-login.dto";
import { jwtAuthGuard } from "./jwt_auth.guards";
import { ApiTags } from "@nestjs/swagger";


@ApiTags('AUTHENTICATION')
@Controller('Signin')
export class AuthControler{
    constructor(private readonly authService:AuthService){}

    @Post()
    async login(@Body() authLoginDto: AuthLoginDto){
        return this.authService.login(authLoginDto);
    }

    @UseGuards(jwtAuthGuard)
    @Get()
    async test(){
        return "Login successfully";
    }
}