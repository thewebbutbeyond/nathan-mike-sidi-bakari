import "@tanstack/router-core";

declare module "@tanstack/router-core" {
  interface FilebaseRouteOptionsInterface {
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
