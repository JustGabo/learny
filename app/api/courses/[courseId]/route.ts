import db from "@/db/drizzle";
import { courses } from "@/db/schema";
import { isAdmin } from "@/lib/admin";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export const GET = async (
  req: Request,
  { params }: { params: { courseId: number } }
) => {
  if (!isAdmin()) {
    return new NextResponse("Unauthorized", { status: 403 });
  }

  const data = db.query.courses.findFirst({
    where: eq(courses.id, params.courseId),
  })

  return NextResponse.json(data);
};

export const PUT = async (
    req: Request,
    { params }: { params: { courseId: number } }
  ) => {
    if (!isAdmin()) {
      return new NextResponse("Unauthorized", { status: 403 });
    }

    const body = await req.json()
  
    const data = db.update(courses).set({
        ...body,

    }).where(eq(courses.id, params.courseId)).returning()
  
    //@ts-ignore
    return NextResponse.json(data[0])
  };
  

  export const DELETE = async (
    req: Request,
    { params }: { params: { courseId: number } }
  ) => {
    if (!isAdmin()) {
      return new NextResponse("Unauthorized", { status: 403 });
    }
  
    const data = db.delete(courses).where(eq(courses.id, params.courseId)).returning()
  
    //@ts-ignore
    return NextResponse.json(data[0]);
  };
  