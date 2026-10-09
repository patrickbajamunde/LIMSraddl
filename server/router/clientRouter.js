import express from 'express'
import {createClient, deleteRequest, getClient, getClientId, updateRequest, userRequest, approveRequest} from '../controller/receivingController.js'
import { authMiddleware } from "../controller/authController.js"

const clientRouter = express.Router()

clientRouter.post('/newClient', authMiddleware, createClient);
clientRouter.get('/getClient', getClient);
clientRouter.get('/getClient/:id', getClientId);
clientRouter.get('/userRequest', userRequest);
clientRouter.delete('/delete/arf/:id', authMiddleware, deleteRequest)
clientRouter.put('/update/arf/:id', authMiddleware, updateRequest)
clientRouter.put('/approve/arf/:id', authMiddleware, approveRequest)

export default clientRouter;