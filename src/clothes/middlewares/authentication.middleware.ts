import { Injectable, NestMiddleware } from "@nestjs/common";


@Injectable()
export class AuthenticationMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: Function){
        console.log('Authentication Middleware');
        next ();
    }
    
}