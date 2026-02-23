import "dotenv/config";
import { createApp } from "./app";
import { serveStatic } from "./static";

(async () => {
  const { app, httpServer } = await createApp();

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 3000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "3000", 10);
  const host = process.platform === "win32" ? "127.0.0.1" : "0.0.0.0";
  const listenOptions =
    process.platform === "win32"
      ? { port, host }
      : { port, host, reusePort: true };

  httpServer.listen(listenOptions, () => {
    console.log(`serving on http://${host}:${port}`);
  });
})();
