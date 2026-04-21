import "@tanstack/router-core";

declare module "@tanstack/router-core" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface FilebaseRouteOptionsInterface<
    TRegister = unknown,
    TParentRoute = unknown,
    TId = unknown,
    TPath = unknown,
    TSearchValidator = unknown,
    TParams = unknown,
    TLoaderDeps = unknown,
    TLoaderFn = unknown,
    TRouterContext = unknown,
    TRouteContextFn = unknown,
    TBeforeLoadFn = unknown,
    TRemountDepsFn = unknown,
    TSSR = unknown,
    TServerMiddlewares = unknown,
    THandlers = unknown,
  > {
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
