import "@tanstack/react-router";

declare module "@tanstack/react-router" {
  interface FileBaseRouteOptions {
    server?: {
      handlers?: {
        GET?: (ctx: { request: Request }) => Response | Promise<Response>;
        POST?: (ctx: { request: Request }) => Response | Promise<Response>;
        PUT?: (ctx: { request: Request }) => Response | Promise<Response>;
        DELETE?: (ctx: { request: Request }) => Response | Promise<Response>;
        PATCH?: (ctx: { request: Request }) => Response | Promise<Response>;
      };
    };
  }
}
