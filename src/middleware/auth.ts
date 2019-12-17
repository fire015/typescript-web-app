import {Request, Response, NextFunction} from "express";

export const checkAuthenticated = (req: Request, res: Response, next: NextFunction) => {
    if (!req.session.user) {
        return res.status(401).send('Access denied');
    }

    next();
};