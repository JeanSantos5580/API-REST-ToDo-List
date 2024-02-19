import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaCliente'

export async function getAllTasksController(req: Request, res: Response) {
    try {
        const tasks = await prismaClient.task.findMany()
        return res.json(tasks)
    } catch (error) {
        console.log('Error when trying to access all tasks:', error)
        return res.status(500).json({ error: 'Error when trying to access all tasks.' })
    }
}