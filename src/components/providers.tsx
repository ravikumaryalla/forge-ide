"use client";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { useAuth } from "@clerk/nextjs";
import { ConvexReactClient } from "convex/react";
import { ClerkProvider, SignInButton, SignUpButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ThemeProvider } from "@/src/components/theme-provider";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Spinner } from "./ui/spinner";
import UnauthenticatedView from "../features/auth/unauthenthicated-view";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
      }}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Authenticated>{children}</Authenticated>
          <Unauthenticated>
            <div className="flex items-center justify-center gap-2 p-4">
              <UnauthenticatedView />
            </div>
          </Unauthenticated>
          <AuthLoading>
            <div className="flex items-center justify-center h-screen">
              <Spinner className="h-10 w-10" />
            </div>
          </AuthLoading>
        </ThemeProvider>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
