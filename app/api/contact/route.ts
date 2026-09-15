import { NextRequest, NextResponse } from "next/server";

// Placeholder contact API route.
// Replace this with your actual CRM/email integration.
// IMPORTANT: Do not hardcode API keys. Use environment variables.

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { fullName, email, phone, businessActivity, preferredEmirate, setupType } = body;

    // Basic server-side validation
    if (!fullName || !email || !phone || !preferredEmirate || !setupType) {
      return NextResponse.json(
        { error: "Required fields are missing." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    // TODO: Integrate with your CRM or email service here.
    // Example integrations:
    //   - Send email via Resend: https://resend.com
    //   - Send to HubSpot CRM
    //   - Send to Zoho CRM
    //   - Store in your database
    //
    // Use environment variables for all API keys:
    //   process.env.RESEND_API_KEY
    //   process.env.HUBSPOT_API_KEY
    //   etc.

    console.log("New business setup enquiry:", {
      fullName,
      email,
      phone,
      businessActivity,
      preferredEmirate,
      setupType,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Enquiry received successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
