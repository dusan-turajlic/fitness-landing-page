import { redirect } from "next/navigation";

export async function GET() {
  const params = new URLSearchParams({
    client_id: process.env.GITHUB_CLIENT_ID!,
    scope: "repo,user",
    redirect_uri: `${process.env.NEXT_PUBLIC_SITE_URL}/api/callback`,
  });
  redirect(`https://github.com/login/oauth/authorize?${params}`);
}
