const rawBaseUrl = import.meta.env.BASE_URL || "/";

export const publicBasePath = rawBaseUrl === "/" ? "" : rawBaseUrl.replace(/\/$/, "");

export const routerBasePath = publicBasePath || "/";
export const publicOrigin = (
  import.meta.env.VITE_SITE_ORIGIN || "https://thewebbutbeyond.github.io"
).replace(/\/$/, "");

export function withBasePath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${publicBasePath}${normalizedPath}`;
}

export function withPublicUrl(path: string) {
  return `${publicOrigin}${withBasePath(path)}`;
}
