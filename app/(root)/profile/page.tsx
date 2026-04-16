import { getAuth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ProfileClient from "./ProfileClient";

// Server Component
const ProfilePage = async () => {
  const shouldSkipAuthCheck = process.env.NEXT_PHASE === 'phase-production-build' || !process.env.MONGODB_URI;

  let session: Awaited<ReturnType<Awaited<ReturnType<typeof getAuth>>['api']['getSession']>> | null = null;

  if (!shouldSkipAuthCheck) {
    try {
      const auth = await getAuth();
      session = await auth.api.getSession({
        headers: await headers(),
      });
    } catch (error) {
      console.error('Failed to read session on profile page:', error);
    }
  }

  if (!shouldSkipAuthCheck && !session?.user) redirect("/sign-in");

  const user = {
    id: session?.user?.id || 'build-user',
    name: session?.user?.name || 'Build User',
    email: session?.user?.email || 'build@example.com',
    image: session?.user?.image || "",
    bio: "",
  };

  return <ProfileClient user={user} />;
};

export default ProfilePage;