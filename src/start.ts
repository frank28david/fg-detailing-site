import { createStart, createMiddleware } from "@tanstack/react-start";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(
      "<!doctype html><meta charset=utf-8><title>Something went wrong</title><body style=\"font-family:system-ui;padding:2rem;text-align:center\"><h1>Something went wrong</h1><p>Please refresh the page or try again later.</p></body>",
      { status: 500, headers: { "content-type": "text/html; charset=utf-8" } },
    );
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
