// import { useSession } from "@panfo/auth";
import { Button } from "@panfo/ui/button";

import { useSignIn, useSignOut, useUser } from "~/hooks/auth";

export function AuthShowcase() {
  const session = useUser();
  const signIn = useSignIn();
  const signOut = useSignOut();

  if (!session) {
    return (
      <form>
        <Button
          size="lg"
          onClick={async (e) => {
            e.preventDefault();
            console.log("Signing in");
            await signIn();
          }}
        >
          Sign in with Discord
        </Button>
      </form>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        <span>Logged in as {session.name}</span>
      </p>

      <form>
        <Button
          size="lg"
          onClick={async (e) => {
            e.preventDefault();
            await signOut();
          }}
        >
          Sign out
        </Button>
      </form>
    </div>
  );
}
