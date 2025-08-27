import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

export async function GET() {
  try {
    // Path to your case study file - you'll need to place the file in the public directory
    const filePath = path.join(process.cwd(), "public", "case-study.pdf");

    // You can replace this with any file you want to serve
    // For now, let's create a placeholder response
    const fileBuffer = await readFile(filePath).catch(() => {
      // If file doesn't exist, return a placeholder response
      return Buffer.from(
        "Case study file not found. Please add your case study PDF to public/case-study.pdf"
      );
    });

    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set(
      "Content-Disposition",
      'attachment; filename="opti9-vmware-case-study.pdf"'
    );

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "File download failed" },
      { status: 500 }
    );
  }
}
