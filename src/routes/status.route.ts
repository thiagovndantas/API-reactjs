import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { default_type } from "mime";

const statusRoute = Router();


statusRoute.get('/status', ( req: Request, res: Response, next: NextFunction) =>{

    res.sendStatus(StatusCodes.OK)

});

export default statusRoute;