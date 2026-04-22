const rawBaseUrl = import.meta.env.BASE_URL || "/";

export const publicBasePath = rawBaseUrl === "/" ? "" : rawBaseUrl.replace(/\/$/, "");

export const routerBasePath = publicBasePath || "/";

export function withBasePath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${publicBasePath}${normalizedPath}`;
}
