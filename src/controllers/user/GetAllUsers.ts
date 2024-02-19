import {Request, Response} from 'express'
import { prismaClient } from '../../database/prismaCliente'

export async function getAllUsersController(req: Request, res: Response){
    try{
        const users = await prismaClient.user.findMany()
        return res.json(users)
    }catch(error){
        console.log('Error when trying to get users:', error)
        return res.status(500).json({error: 'Error when trying to get users.'})
    }
}