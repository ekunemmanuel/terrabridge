import { createApp } from "./app.ts";
import { log } from "./vite";

(async () => {
  const { httpServer } = await createApp();

  // ALWAY serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);

  // Only listen if we're not running as a Vercel serverless function
  if (process.env.VERCEL !== "1") {
    httpServer.listen(
      {
        port,
        host: "0.0.0.0",
      },
      () => {
        log(`serving on port ${port}`);
      },
    );
  }
})();
