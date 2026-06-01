import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl.searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL requerida" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.microlink.io?url=${encodeURIComponent(url)}`
    );
    const data = await response.json();
    return NextResponse.json(data.data);
  } catch {
    return NextResponse.json(
      { error: "Error al obtener metadatos" },
      { status: 500 }
    );
  }
}
