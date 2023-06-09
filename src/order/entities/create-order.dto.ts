import { IsInt } from "class-validator";

export class CreateBookingDto {
    @IsInt()
    roomId: number;

    @IsInt()
    studentId: number;
}