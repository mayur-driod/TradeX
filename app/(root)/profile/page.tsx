import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ProfileClient from "./ProfileClient";

// Server Component
const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session?.user) redirect("/sign-in");
  const user = {
    id: session.user.id,
    name: session.user.name,
    email: session.user.email,
    image: session.user.image || "",
    bio: session.user.bio || "",
  };

  return <ProfileClient user={user} />;
};

export default ProfilePage;