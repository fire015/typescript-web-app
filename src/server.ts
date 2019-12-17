import app from "./app";

app.listen(app.get("port"), () => console.log("App listening on port %d", app.get("port")));