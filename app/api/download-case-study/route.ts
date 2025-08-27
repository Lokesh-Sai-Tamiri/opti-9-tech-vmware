import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const MONGO_URL = process.env.MONGO_URL || "";
const DB_NAME = "opti9_db";
const COLLECTION_NAME = "download_case_study";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const formData = {
      ...data,
      from_website: "Opti9",
      submitted_at: new Date().toISOString(),
    };

    if (!MONGO_URL) {
      return NextResponse.json(
        { error: "MongoDB URL not set" },
        { status: 500 }
      );
    }

    const client = new MongoClient(MONGO_URL);
    await client.connect();
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    const result = await collection.insertOne(formData);
    await client.close();

    return NextResponse.json({
      success: true,
      id: result.insertedId,
      downloadReady: true,
    });
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
