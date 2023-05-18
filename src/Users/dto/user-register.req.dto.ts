import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator"
import { MESSAGE, REGEX } from "src/app.utils";

export class UserRegisterRequestDto{
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @Length(8,20)
    password:string;

    @IsNotEmpty()
    @Length(8,20)
    confirm:string;
}