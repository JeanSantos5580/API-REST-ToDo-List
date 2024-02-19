import { Request, Response } from 'express'
import { prismaClient } from '../../database/prismaCliente'

export async function createTaskController(req: Request, res: Response) {
    try {
        const { title, description, done, user_id } = req.body

        const newTask = await prismaClient.task.create({
            data: {
                title,
                description,
                done,
                user_id
            }
        })
        return res.json(newTask)
    } catch (error) {
        console.log('Error when trying to create task: ', error)
        return res.status(500).json({ error: 'Error when trying to create task' })
    }
}