import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);

        const page = parseInt(searchParams.get("page")) || 1;
        const limit = parseInt(searchParams.get("limit")) || 3;

        const skip = (page - 1) * limit;

        const client = await clientPromise;
        const db = client.db(process.env.DB_NAME);

        const collection = db.collection("projects");

        const totalProjects = await collection.countDocuments();

        const projects = await collection
            .find({})
            .sort({ _id: -1 }) // নতুন project আগে দেখাবে
            .skip(skip)
            .limit(limit)
            .toArray();

        return NextResponse.json({
            projects,
            totalProjects,
            currentPage: page,
            totalPages: Math.ceil(totalProjects / limit),
            limit,
        });
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}
export async function POST(req) {
    try {
        const body = await req.json();

        const client = await clientPromise;

        const db = client.db(process.env.DB_NAME);

        const result = await db
            .collection("projects")
            .insertOne(body);

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }
}