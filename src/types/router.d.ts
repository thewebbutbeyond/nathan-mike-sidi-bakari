import "@tanstack/react-router";

declare module "@tanstack/react-router" {
  // Augment the file-based route options to allow `server` handlers used
  // by TanStack Start API routes (e.g. /rss.xml).
  interface FilebaseRouteOptionsInterface<
    TRegister = unknown,
    TParentRoute = unknown,
    TId = unknown,
    TPath = unknown,
    TFullPath = unknown,
    TCustomId = unknown,
    TSearchValidator = unknown,
    TParams = unknown,
    TLoaderDeps = unknown,
    TLoaderFn = unknown,
    TBeforeLoadFn = unknown,
    TRouteContext = unknown,
    TRouterContext = unknown,
    TFileRouteTypes = unknown
  > {
    server?: {
      handlers?: Record<
        string,
        (ctx: { request: Request }) => Response | Promise<Response>
      >;
    };
  }
}

// Reference unused generics to avoid TS errors
export type _Unused<T> = T;
