import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaCliente'

export async function getAllTasksFromAUserController(req: Request, res: Response) {
    try {
        const { id } = req.params

        const tasks = await prismaClient.user.findUnique({
            where: {
                id
            }, include: {
                task: true
            }
        })

        return res.json(tasks)
    } catch (error) {
        console.log('Error when trying to access tasks:', error)
        return res.status(500).json({ error: 'Error when trying to access tasks.' })
    }
}