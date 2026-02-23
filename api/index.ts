// @ts-ignore
import { createApp } from "../dist/app.js";

let appFn: any;

export default async function handler(req: any, res: any) {
  if (!appFn) {
    const { app } = await createApp();
    appFn = app;
  }
  appFn(req, res);
}
