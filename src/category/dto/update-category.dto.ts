import { IsNotEmpty, IsString } from "class-validator";

export class updateCategoryDto{
    @IsNotEmpty()
    @IsString()
    title:string;
}