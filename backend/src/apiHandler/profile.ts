import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

dotenv.config();


const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  console.log("Reach Here")
  res.send("Express + TypeScript Server ");


});


export default app;