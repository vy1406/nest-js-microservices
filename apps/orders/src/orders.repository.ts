import { Injectable, Logger } from "@nestjs/common";
import { AbstractRepository } from "@app/common";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Model, Connection } from 'mongoose'
import { Order } from "./schemas/order.schema";

@Injectable()
export class OrdersRepository extends AbstractRepository<Order> {
    protected readonly logger = new Logger(Order.name)

    constructor(
        @InjectModel(Order.name) orderModel: Model<Order>,
        @InjectConnection() connection: Connection
    ) {
        super(orderModel, connection)
    }
}
// https://www.youtube.com/watch?v=yuVVKB0EaOQ&t=1622s