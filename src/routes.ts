import {Router} from "express";
import * as homeController from "./controllers/home";
import * as userController from "./controllers/user";
import * as auth from "./middleware/auth";

const router = Router();

router.get('/', homeController.index);
router.post('/login', userController.login);
router.get('/user', auth.checkAuthenticated, userController.index);

export default router;