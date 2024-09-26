import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes using a route matcher
const isPublicRoute = createRouteMatcher([
  "/",
  "/api/webhook",
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

export default clerkMiddleware((auth, request) => {
  const { userId, orgId } = auth();
  const requestUrl = new URL(request.url);
  const currentPath = requestUrl.pathname;

  // Protect non-public routes
  if (!isPublicRoute(request)) {
    auth().protect();
  }

  // If the user is not logged in and trying to access a non-public route, redirect to sign-in
  if (!userId && !isPublicRoute(request)) {
    return NextResponse.redirect(`/sign-in`);
  }

  // If the user is logged in but has no orgId, redirect to the organization selection page
  if (userId && !orgId) {
    if (currentPath !== "/select-org") {
      return NextResponse.redirect(new URL("/select-org", request.url));
    }
  }

  // If the user is logged in and tries to access a public route, redirect to their organization page
  if (userId && orgId && isPublicRoute(request)) {
    const orgPageUrl = new URL(`/organization/${orgId}`, request.url);
    if (currentPath !== orgPageUrl.pathname) {
      return NextResponse.redirect(orgPageUrl);
    }
  }

  // Allow the request to proceed if none of the above conditions are met
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
