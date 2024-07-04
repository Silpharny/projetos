import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/CreateCustomerService";


class CreateCustomerController {
    async handle(request:FastifyRequest, reply:FastifyReply){
        const {name, email, status} = request.body as {name:string, email:string, status:boolean}
        
        const customerService = new CreateCustomerService()
        const customer = await customerService.execute({name, email, status})

        reply.send(customer)
    }
}

export {CreateCustomerController}