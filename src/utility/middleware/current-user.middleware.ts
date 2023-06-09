import { Injectable, NestMiddleware } from '@nestjs/common';
import { isArray } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { UserService } from 'src/Users/user.service';

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
    constructor(private readonly userService:UserService){}
  async use(req: Request, res: Response, next: NextFunction) {
    const authHeader= req.headers.authorization || req.headers.Authorization;
    if(!authHeader || isArray(authHeader)|| !authHeader.startsWith('Bearer')){
        next();
    }else{
        console.log('succefull middleware');
        next();
    }
  }
}

