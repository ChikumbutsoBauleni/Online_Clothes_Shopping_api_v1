import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/Users/user.service";
import {JwtService} from '@nestjs/jwt'
import { AuthLoginDto } from "./auth-login.dto";
@Injectable()
export class AuthService{
    findAll(arg0: string) {
        throw new Error("Method not implemented.");
    }
    findall(arg0: string) {
        throw new Error("Method not implemented.");
    }

    constructor(  
        private userService:UserService,
        private jwtService:JwtService
        ){}


        async login(authLoginDto:AuthLoginDto){
            const user = await this.validateUser(authLoginDto);
            const payload = {
                userId: user.id
                
            };

            return{
                access_token:this.jwtService.sign(payload)
            };
            return{message:'signin is sucessful'};
        }
        async validateUser(authLoginDto:AuthLoginDto){
            const{ email,password} = authLoginDto;

                const user = await this.userService.findByEmail(email);
                if(!(await user?.validatePassword(password))){
                    throw new UnauthorizedException();
                }
                return user;
        }
        async signup(){
            return'';
        }async signout(){
            return'';
        }
   
}