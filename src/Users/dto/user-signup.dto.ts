import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"

export class UserSignUp{
    @IsNotEmpty({message:'Name can not be empty'})
    @IsString({message:'Name should be string'})
    name:string;

    @IsNotEmpty({message:'email can not be empty'})
    @IsEmail({},{message:'Please provide a valid email'})
    email:string;

    @IsNotEmpty({message:'Password can not be empty'})
    @MinLength(8,{message:'Password minmum characters should be 8'})
    password:string


}