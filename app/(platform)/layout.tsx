import { ClerkProvider } from "@clerk/nextjs";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      afterSignOutUrl={"/"}
      signInFallbackRedirectUrl={"/select-org"}
      signUpFallbackRedirectUrl={"/select-org"}
    >
      {children}
    </ClerkProvider>
  );
}
