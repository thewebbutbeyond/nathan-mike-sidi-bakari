import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/fr/notes")({
  component: () => <Outlet />,
});
