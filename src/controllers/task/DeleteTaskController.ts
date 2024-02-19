import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaCliente'

export async function deleteTaskController(req: Request, res: Response) {
    try {
        const { id } = req.params

        const deletedTask = await prismaClient.task.delete({ where: { id } })
        
        return res.json(deletedTask)
    } catch (error) {
        console.log('Error when deleting task:', error)
        return res.status(500).json({ error: 'Error when deleting task.' })
    }
}