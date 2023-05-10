import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request } from "supertest";
import { Response } from "supertest";

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        
    }
    
}