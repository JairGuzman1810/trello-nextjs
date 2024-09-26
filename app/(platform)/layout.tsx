import { ClerkProvider } from "@clerk/nextjs";

function PlatformLayout({ children }: { children: React.ReactNode }) {
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

export default PlatformLayout;
