import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// We initialize Resend with the API key from environment variables
// In development, this won't actually send unless RESEND_API_KEY is set
const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        // Attempt to send email using Resend
        // By default Resend only allows sending to the verified domain email
        const data = await resend.emails.send({
            from: 'JD Time & Ride <onboarding@resend.dev>',
            to: ['hello@jdtimeandride.com'], // The owner's email
            subject: `New Web Inquiry: ${subject || 'General'}`,
            replyTo: email,
            html: `
        <h2>New Inquiry from jdtimeandride.com</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('Email API Error:', error);
        return NextResponse.json(
            { error: 'Failed to send inquiry. Please try again later.' },
            { status: 500 }
        );
    }
}
