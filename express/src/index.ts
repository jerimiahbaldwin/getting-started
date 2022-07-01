import express from "express";
import { router as v1Router } from './v1/routes';
const app = express();

app.use('v1', v1Router)

const port = 3000; // default port to listen

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );