import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaCliente'

export async function deleteUserController(req: Request, res: Response) {
    try {
        const { id } = req.params
        const deletedUser = await prismaClient.user.delete({ where: { id } })

        return res.json(deletedUser)
    } catch (error) {
        console.log("Error when deleting user:", error)
        return res.status(500).json({ error: "Error when deleting user." })
    }

}