import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { challengeOptionId: number } }
) => {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const data = db.query.challengeOptions.findFirst({
    where: eq(challengeOptions.id, params.challengeOptionId),
  });

  return NextResponse.json(data);
};

export const PUT = async (
  req: Request,
  { params }: { params: { challengeOptionId: number } }
) => {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const body = await req.json();

  const data = db
    .update(challengeOptions)
    .set({
      ...body,
    })
    .where(eq(challengeOptions.id, params.challengeOptionId))
    .returning();

  //@ts-ignore
  return NextResponse.json(data[0]);
};

export const DELETE = async (
  req: Request,
  { params }: { params: { challengeOptionId: number } }
) => {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const data = db
    .delete(challengeOptions)
    .where(eq(challengeOptions.id, params.challengeOptionId))
    .returning();

  //@ts-ignore
  return NextResponse.json(data[0]);
};
