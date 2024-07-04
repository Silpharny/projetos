import fastify, { FastifyInstance, FastifyPluginOptions,FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomerController } from "./controllers/ListCustomersController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";


export async function routes(fastfify:FastifyInstance, options:FastifyPluginOptions) {


    fastfify.get('/customers', async(request:FastifyRequest, reply:FastifyReply) => {
        return new ListCustomerController().handle(request,reply)
    })

    fastfify.post('/customer', async(request:FastifyRequest, reply:FastifyReply) => {
        return new CreateCustomerController().handle(request,reply)
    })

    fastfify.delete('/customer', async(request:FastifyRequest, reply:FastifyReply) => {
        return new DeleteCustomerController().handle(request,reply)
    })
}