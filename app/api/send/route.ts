"use server";

import { z } from "zod"
import { Resend } from 'resend';
import { formSchema } from "@/lib/schema";
import { EmailTemplate } from "@/components/ui/email-template";


type ContactFormInputs = z.infer<typeof formSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
    const result = formSchema.safeParse(data);

    if(result.success){
        const {name, email, message } = result.data;
        try {

            const data = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'nhlanhlaelvis67@gmail.com',
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