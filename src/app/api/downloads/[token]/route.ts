import { NextResponse } from "next/server";
import { validateDownloadToken } from "@/lib/db/mongodb";

interface RouteParams {
  params: Promise<{ token: string }>;
}

export async function GET(req: Request, { params }: RouteParams) {
  const { token } = await params;

  const valid = await validateDownloadToken(token);
  if (!valid) {
    return new NextResponse(
      JSON.stringify({ error: "Download token is invalid or has expired." }),
      { status: 403, headers: { "Content-Type": "application/json" } }
    );
  }

  // Generate protected binary / text file stream for download
  const content = `====================================================================
SIVA DIGITAL ASSET: ${valid.productName}
Official Release Package & Commercial License
Filename: ${valid.fileName}
====================================================================

Thank you for your purchase and support!
You now have a non-exclusive, perpetual commercial license to use this 
digital product in both personal and client commercial projects.

Included In This Package:
1. Complete source code repository & assets
2. Architecture documentation & setup guide
3. Lifetime updates access via your Siva Dashboard account

Need Support or Custom Enhancements?
Visit: https://siva.dev/contact
Email: notifications@siva.dev

Happy Building!
Siva — Full-Stack Developer & Product Builder
`;

  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Disposition": `attachment; filename="${valid.fileName.replace(/\.pdf|\.zip/, "")}-licensed.txt"`,
      "Cache-Control": "no-store, no-cache, must-revalidate",
    },
  });
}
