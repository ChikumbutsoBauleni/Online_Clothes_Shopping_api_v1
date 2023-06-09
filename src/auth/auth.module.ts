import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/Users/user.modules";
import { jwtStrategy } from "./jwt.strategy";
import { AuthService } from "./auth.service";
import { AuthControler } from "./auth.controller";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.registerAsync({
            imports:[ConfigModule],
            useFactory:async() =>({
                //secret:process.env.JWT_SECRET=pplucky00691234
                secret: "pplucky00691234 "
            }),
            inject:[ConfigService]  
        })
    ],
    controllers:[AuthControler],
    providers:[AuthService,jwtStrategy]
})
export class AuthModule{}