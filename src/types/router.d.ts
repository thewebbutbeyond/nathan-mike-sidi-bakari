import "@tanstack/react-router";

declare module "@tanstack/react-router" {
  interface FilebaseRouteOptionsInterface {
    server?: {
      handlers?: Record<string, (ctx: { request: Request }) => Response | Promise<Response>>;
    };
  }
}
