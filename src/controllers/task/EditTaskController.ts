import { Request, Response } from "express"
import { prismaClient } from "../../database/prismaCliente"

export async function editTaskController(req: Request, res: Response) {
    try {
        const { id } = req.params
        const { title, description, done } = req.body
        const editedTask = await prismaClient.task.update({
            where: { id }, data: {
                title,
                description,
                done
            }
        })

        return res.json(editedTask)
    } catch (error) {
        console.log('Error when editing task:', error)
        return res.status(500).json({ error: 'Error when editing task.' })
    }
}