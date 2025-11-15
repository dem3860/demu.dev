import { NextResponse } from "next/server";

export async function GET() {
  const url = "https://zenn.dev/api/articles?username=dem3860&order=latest";

  const res = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json(data);
}
