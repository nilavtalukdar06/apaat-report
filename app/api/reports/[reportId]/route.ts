import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
export async function PATCH(
  request: Request,
  { params }: { params: { reportId: string } }
) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { status } = await request.json();

    // Check if the report exists
    const existingReport = await prisma.report.findUnique({
      where: { reportId: params.reportId },
    });
    if (!existingReport) {
      return NextResponse.json({ error: "Report not found" }, { status: 404 });
    }

    const report = await prisma.report.update({
      where: { reportId: params.reportId },
      data: { status },
    });

    return NextResponse.json(report);
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating report" },
      { status: 500 }
    );
  }
}
