import path from "path";
import fs from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const filePath = path.join(
      process.cwd(),
      "public",
      "new_images",
      "KAMCO December Newsletter.pdf"
    );
    const fileBuffer = await fs.readFile(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="KAMCO December Newsletter.pdf"',
      },
    });
  } catch (error) {
    return new NextResponse("Failed to download the file.", { status: 500 });
  }
}
