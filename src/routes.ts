import { Router } from "express";
import { createTaskController as createTask } from "./controllers/task/CreateTaskController";
import { createUserController as createUser } from "./controllers/user/CreateUserController";
import { getAllUsersController as getAllUsers } from "./controllers/user/GetAllUsers";
import { deleteUserController as deleteUser } from "./controllers/user/DeleteUserController";
import { updateUserController as updateUser } from "./controllers/user/UpdateUserController";
import { getAllTasksFromAUserController as getAllTasksFromAUser } from "./controllers/user/GetAllTasksFromAUser";
import { editTaskController as editTask } from "./controllers/task/EditTaskController";
import { deleteTaskController as deleteTask } from "./controllers/task/DeleteTaskController";
import { getAllTasksController as getAllTasks } from "./controllers/task/GetAllTasksController";

const router = Router()

router.post('/user/add', createUser)
router.put('/user/edit/:id', updateUser)
router.delete('/user/delete/:id', deleteUser)
router.get('/user', getAllUsers)
router.get('/user/tasks/:id', getAllTasksFromAUser)

router.post('/task/add', createTask)
router.put('/task/edit/:id', editTask)
router.delete('/task/delete/:id', deleteTask)
router.get('/task', getAllTasks)

export { router }