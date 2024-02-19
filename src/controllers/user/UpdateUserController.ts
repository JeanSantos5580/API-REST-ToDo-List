import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaCliente'

export async function updateUserController(req: Request, res: Response) {
    try {
        const { id } = req.params

        const { user_name, email } = req.body
        const updatedUser = await prismaClient.user.update({
            where: { id },
            data: {
                user_name,
                email
            }
        })

        return res.json(updatedUser)
    } catch (error) {
        console.log('Error updating user:', error)
        return res.status(500).json({ error: 'Error updating user.' })
    }
}