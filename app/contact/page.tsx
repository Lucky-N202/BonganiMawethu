"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MovingBorderBtn } from "@/components/ui/moving-border";
import { formSchema } from "@/lib/schema";
import { toast } from "sonner";
import { Label } from "@/components/ui/label";



export type ContactFormInputs = z.infer<typeof formSchema>;

const Contact = () => {

    const {control, register, handleSubmit, reset, formState: {errors, isSubmitting }} = useForm<ContactFormInputs>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
        email: "",
        message: ""
        }

    }) 



    const onSubmit: SubmitHandler<ContactFormInputs> = async (data) =>{
        
    

            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: data.name,
                email: data.email,
                message: data.message,
                }),
            });

            if(response.ok){
                console.log(data)
                toast.success('Email sent, successfully!')
                reset()
                return
            }else {
                toast.error("There was a problem sending email. Pls try again!");
            }
        
        }
     
    

  return (
    <section id="contact" className="py-12 bg-gray-100 dark:bg-grid-white/[0.05] bg-grid-black/[0.05]">
        <div className="container mx-auto">
          
            <h2 className="text-3xl font-bold text-gray-800 mb-4  text-center">Get in Touch for Tailored Solutions!</h2>
           
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto shadow-md shadow-blue-500  bg-white  p-8 rounded-2xl ">
            <div className="mb-4">
                <Label className="block text-gray-700 font-bold mb-2">Name</Label>
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input {...register("name")} placeholder="Enter name" type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" {...field} />}
                />
                <p className=" text-red-500">{errors.name?.message}</p>                   
                                                         
            </div>
            <div className="mb-4">
            
                <Label className="block text-gray-700 font-bold mb-2">Email</Label>
                 <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input {...register("email")} placeholder="Enter email" type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" {...field} />}
                />           
                <p className=" text-red-500">{errors.email?.message}</p>                        
                        
             </div>
            <div className="mb-4">

                <Label className="block text-gray-700 font-bold mb-2">Message</Label>
                <Controller
                    name="message"
                    control={control}
                    render={({ field }) => <Textarea  {...register("message")} placeholder="Type your message here."  rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" {...field} />}
                />                            
                <p className=" text-red-500">{errors.message?.message}</p>
                                          
            </div>
            <MovingBorderBtn disabled={isSubmitting} type="submit" className="bg-white border-green-100 hover:bg-blue-600 hover:text-white text-green-500 font-bold py-2 px-4 rounded-full">{isSubmitting ? "Loading..." : "Send Message"}</MovingBorderBtn>
        </form>
                             
        </div>
    </section>
  )
}

export default Contact