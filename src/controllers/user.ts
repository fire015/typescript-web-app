import {Request, Response} from "express";
import {User, validateUser} from "../models/user";

export const index = (req: Request, res: Response) => {
    const user = req.session.user as User;
    res.send(`I am user ${user.name}`);
};

export const login = async (req: Request, res: Response) => {
    try {
        req.session.user = await validateUser(req.body.email, req.body.password);
        res.redirect('/user');
    } catch (err) {
        res.status(403).render('index', {err});
    }
};