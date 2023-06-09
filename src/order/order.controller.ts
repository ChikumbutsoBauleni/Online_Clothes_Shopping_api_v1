import { Controller, Post, Param, Res, NotFoundException, Get, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Order } from './entities/order.entity';


@ApiTags('ORDERING')
@Controller('ordering')
export class OrderController {
    orderService: any;
    constructor(
    ){}

    @Post(':productId/:userId')
    async createOrder(
        @Param('productId') productId: number,
        @Param('userId') userId: number,
        @Res() res
    ): Promise <Order> {
        try{
            const order = await this.orderService.createOrder(productId, userId);
            return res.send(order);
        }catch(err){
            console.log(err);
            throw new NotFoundException(`ordering Failed `);
        }
    }

    // @Get(':hostelId')
    // async getAllBookings (@Param('hostelId') hostelId: number, @Res() res ): Promise<Booking[]> {
    //     try{
    //         const bookings = await this.bookingService.returnAllBookings(hostelId);
    //         return res.send(bookings);
    //     }catch(err){
    //         console.log(err);
    //         throw new NotFoundException('Bookings Not Found');
    //     }

    

    @Get(':OrderingId')
    async getBooking(@Param('orderId') orderId: number, @Res() res ): Promise <Order> {
        try{
            const order = await this.orderService.returnOrder(orderId);
            return res.send(order);
        }catch(err){
            console.log(err);
            throw new NotFoundException(`Room Not Booked`);
        }
    }

    @Delete(':orderingId')
    async deleteOrder(@Param('orderId') orderId: number, @Res() res ): Promise <void> {
        try{
            const order = await this.orderService.deleteOrder(orderId);
            res.send('Ordering Deleted SuccessFully');
        }catch(err){
            console.log(err);
            throw new NotFoundException(`Failed To Delete a Booking Id ${orderId}`);
        }
    }

}
