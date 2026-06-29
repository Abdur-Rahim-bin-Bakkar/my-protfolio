import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.DB_NAME);

    const project = await db
      .collection("projects")
      .findOne({
        _id: new ObjectId(params.id),
      });

    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}