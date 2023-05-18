import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            //secretOrKey:process.env.JWT_SECRET
            secretOrKey:"pplucky00691234"
        })
    }


    async validate(payload:{userid:number}){
        return{
            userId: payload.userid
        }
    }
          
} 