import sendEmail from "@/utils/email";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, title, content } = await request.json();
    const res = await sendEmail(email, title, content);
    return Response.json({
      code: 1,
      message: "Email sent successfully",
      data: res,
    });
  } catch (e) {
    return Response.json({
      code: -1,
      message: "Failed to send email",
      data: null,
    });
  }
}
