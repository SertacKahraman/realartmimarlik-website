import { NextResponse, type NextRequest } from "next/server";

const isDevelopment = process.env.NODE_ENV !== "production";

function isPrivateHostname(hostname: string) {
  const normalizedHostname = hostname.toLowerCase();

  if (
    normalizedHostname === "localhost" ||
    normalizedHostname === "127.0.0.1" ||
    normalizedHostname === "0.0.0.0" ||
    normalizedHostname === "::1" ||
    normalizedHostname.endsWith(".local")
  ) {
    return true;
  }

  if (normalizedHostname.startsWith("10.") || normalizedHostname.startsWith("192.168.")) {
    return true;
  }

  const private172Match = normalizedHostname.match(/^172\.(\d{1,2})\./);

  if (private172Match) {
    const secondOctet = Number(private172Match[1]);
    return secondOctet >= 16 && secondOctet <= 31;
  }

  return false;
}

function buildContentSecurityPolicy(isSecureRequest: boolean) {
  const directives = [
    "default-src 'self'",
    `script-src 'self' 'unsafe-inline'${isDevelopment ? " 'unsafe-eval'" : ""}`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' blob: data: https:",
    "media-src 'self' blob:",
    `connect-src 'self' https:${isDevelopment ? " http: ws: wss:" : ""}`,
    "font-src 'self' data:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "frame-src 'self' https://maps.google.com https://www.google.com https://www.google.com/maps",
    "worker-src 'self' blob:",
    "manifest-src 'self'",
    isSecureRequest ? "block-all-mixed-content" : "",
    !isDevelopment && isSecureRequest ? "upgrade-insecure-requests" : "",
  ];

  return directives.filter(Boolean).join("; ");
}

function applySecurityHeaders(
  response: NextResponse,
  isSecureRequest: boolean
) {
  response.headers.set(
    "Content-Security-Policy",
    buildContentSecurityPolicy(isSecureRequest)
  );
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");
  response.headers.set("Origin-Agent-Cluster", "?1");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set("X-Frame-Options", "DENY");

  if (!isDevelopment && isSecureRequest) {
    response.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
  }
}

export function middleware(request: NextRequest) {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const forwardedHost = request.headers.get("x-forwarded-host");
  const requestHost = forwardedHost ?? request.headers.get("host") ?? "";
  const requestHostname = requestHost.split(":")[0] || request.nextUrl.hostname;
  const isSecureRequest =
    forwardedProto === "https" || request.nextUrl.protocol === "https:";

  if (!isDevelopment && !isSecureRequest && !isPrivateHostname(requestHostname)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.protocol = "https:";
    redirectUrl.host = requestHost || request.nextUrl.host;
    return NextResponse.redirect(redirectUrl, 308);
  }

  const response = NextResponse.next();
  applySecurityHeaders(response, isSecureRequest);
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|mp4|woff2?|css|js|map|txt|xml)$).*)",
  ],
};
