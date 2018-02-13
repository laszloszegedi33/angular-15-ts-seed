const PORT = 3000;

import * as core from "express-serve-static-core";
import * as express from "express";
import * as path from "path";

const app: core.Express = express();

app.use('/node_modules', express.static(path.resolve('node_modules')));
app.use('/app', express.static(path.resolve('dist/src/app')));
app.use('/assets', express.static(path.resolve('dist/assets')));

app.get('/*', (req: core.Request , res: core.Response) =>  res.sendFile(path.resolve('dist/index.html')));

app.listen(PORT, () =>  console.log('App started.  http://localhost:' + PORT));