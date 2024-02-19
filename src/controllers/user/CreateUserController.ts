import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaCliente'

export async function createUserController(req: Request, res: Response) {
    try {
        const { user_name, email } = req.body
        const newUser = await prismaClient.user.create({
            data: {
                user_name,
                email,
                last_access: new Date()
            }
        })

        return res.json(newUser)
    } catch (error) {
        console.log('Error when trying to create user:', error)
        return res.status(500).json({ error: 'Error when trying to create user.' })
    }
}