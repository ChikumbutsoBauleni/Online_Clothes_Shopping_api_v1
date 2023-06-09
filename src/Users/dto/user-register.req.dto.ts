import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator"

export class UserRegisterRequestDto{
    @IsNotEmpty()
    name:string;

    @IsNotEmpty()
    @IsEmail()
    email:string;

    @IsNotEmpty()
    @Length(8,20)
    password:string;

}