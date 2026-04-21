// Augment TanStack Router route options to allow the `server.handlers` shape
// used by TanStack Start server routes (GET/POST/etc handlers).

import "@tanstack/react-router";

declare module "@tanstack/react-router" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface UpdatableRouteOptionsExtensions {
    server?: {
      handlers?: Partial<
        Record<
          "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS" | "HEAD",
          (ctx: { request: Request }) => Response | Promise<Response>
        >
      >;
    };
  }
}
