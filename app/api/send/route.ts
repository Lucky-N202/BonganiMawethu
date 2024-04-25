"use server";

import { z } from "zod"
import { Resend } from 'resend';
import { formSchema } from "@/lib/schema";
import { EmailTemplate } from "@/components/ui/email-template";
import { NextRequest, NextResponse } from "next/server";


type ContactFormInputs = z.infer<typeof formSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest  ) {
    
    const body = await req.json();

    const { name, email, message } = body;

    if (!message || !email || !name) {
        return NextResponse.json(
          { error: "Missing required fields" },
          { status: 400 }
        );
      }
    


   
        try {

            const {data, error}  = await resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: [email],
                subject: 'Contact Form Submission',
                text: `Name: ${name}\nEmail: ${email}/nMessage: ${message}`,
                react: EmailTemplate({ name, email, message }) 
            })

            if (error) {
                return NextResponse.json(
                  { message: "Email sending failed", error },
                  { status: 400 }
                );
              }

              return NextResponse.json(
                { message: "Email sent successfully", data },
                { status: 200 }
              );
            
        } catch (error) {
            console.error("Error sending email:", error);
            return NextResponse.json(
              { message: "Failed to send email", error },
              { status: 500 }
            );
        }
    


    
}