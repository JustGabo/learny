import db from "@/db/drizzle";
import { lessons } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { lessonId: number } }
) => {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const data = db.query.lessons.findFirst({
    where: eq(lessons.id, params.lessonId),
  })

  return NextResponse.json(data);
};

export const PUT = async (
    req: Request,
    { params }: { params: { lesonId: number } }
  ) => {
    if (!isAdmin()) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const body = await req.json()
  
    const data = db.update(lessons).set({
        ...body,

    }).where(eq(lessons.id, params.lesonId)).returning()
  
    //@ts-ignore
    return NextResponse.json(data[0])
  };
  

  export const DELETE = async (
    req: Request,
    { params }: { params: { lesonId: number } }
  ) => {
    if (!isAdmin()) {
      return new NextResponse("Unauthorized", { status: 403 });
    }
  
    const data = db.delete(lessons).where(eq(lessons.id, params.lesonId)).returning()
  
    //@ts-ignore
    return NextResponse.json(data[0]);
  };
  