import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./routes";
import {VIEW_DIR, SESSION_SECRET} from "./config";

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("views", VIEW_DIR);
app.set("view engine", "pug");

app.use(morgan("dev"));
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(routes);

export default app;