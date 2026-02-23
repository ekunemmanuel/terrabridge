import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = [
    path.resolve(process.cwd(), "dist", "public"),
    path.resolve(process.cwd(), "public"),
    path.resolve(__dirname, "public"),
    path.resolve(__dirname, "..", "public"),
  ].find((p) => fs.existsSync(p) && fs.existsSync(path.join(p, "index.html")));

  if (!distPath) {
    console.error(
      "Critical: Could not find build directory or index.html in expected locations",
    );
    console.log("Current working directory:", process.cwd());
    console.log(" __dirname:", __dirname);
    return; // Don't throw, let the app try to run so we can see other errors
  }

  console.log(`Serving static files from: ${distPath}`);
  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
