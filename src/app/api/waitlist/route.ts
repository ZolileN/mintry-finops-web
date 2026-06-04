import { createClient } from "@libsql/client";
import { NextResponse } from "next/server";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL || "",
  authToken: process.env.TURSO_AUTH_TOKEN || "",
});

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }

    if (!process.env.TURSO_DATABASE_URL) {
      return NextResponse.json({ error: "Database configuration is missing." }, { status: 500 });
    }

    // 1. Ensure table exists
    await client.execute(`
      CREATE TABLE IF NOT EXISTS waitlist (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // 2. Insert email
    try {
      await client.execute({
        sql: "INSERT INTO waitlist (email) VALUES (?);",
        args: [email],
      });
      return NextResponse.json({ message: "You have successfully joined the waitlist!" });
    } catch (insertError: unknown) {
      const err = insertError as { message?: string; code?: string };
      // Handle unique constraint duplicate email gracefully
      if (err.message && (err.message.includes("UNIQUE") || err.code === "SQLITE_CONSTRAINT_UNIQUE")) {
        return NextResponse.json({ message: "You are already on the waitlist!" });
      }
      throw insertError;
    }
  } catch (error: unknown) {
    console.error("Waitlist storage error:", error);
    return NextResponse.json({ error: "Failed to connect to the database." }, { status: 500 });
  }
}
