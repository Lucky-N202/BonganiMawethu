"use server";

import { z } from "zod"
import { Resend } from 'resend';
import { formSchema } from "@/lib/schema";
import { EmailTemplate } from "@/components/ui/email-template";
import { NextResponse } from "next/server";


type ContactFormInputs = z.infer<typeof formSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
    const result = formSchema.safeParse(data);

    if(result.success){
        const {name, email, message } = result.data;
        try {

            const {data, error}  = await resend.emails.send({
                from: 'Lucky nhlanhlaelvis67@gmail.com',
                to: [email],
                subject: 'Contact Form Submission',
                text: `Name: ${name}\nEmail: ${email}/nMessage: ${message}`,
                react: EmailTemplate({ name, email, message }) 
            })

            return { success: true, data}
            
        } catch (error) {
            return { success: false, error}
        }
    }

    if(result.error){
        return { success: false, error: result.error.format()};
    }
    
}