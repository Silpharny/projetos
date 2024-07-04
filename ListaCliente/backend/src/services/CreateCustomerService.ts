import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string,
    email: string,
    status: boolean
}

class CreateCustomerService {
    async execute({ name, email, status }: CreateCustomerProps){

        if(!name || !email) {
            throw new Error('Preencha todos os campos')
        }

        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                status
            }
        })
        
        return customer
    }
}

export { CreateCustomerService }