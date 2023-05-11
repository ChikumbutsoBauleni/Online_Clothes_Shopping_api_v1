import { IsNotEmpty } from "class-validator";

export class CreateProductDto{
    @IsNotEmpty()
    productType: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    description: string;

}
