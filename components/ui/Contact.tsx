"use client";

import { MovingBorderBtn } from "./moving-border";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./form";
import { Input } from "./input";
import { Textarea } from "./textarea";

const formSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(5)

})
    



const Contact = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    });

    const handleSubmit = (values: z.infer<typeof formSchema> ) => {
        console.log(values)
    }

  return (
    <section className="py-12">
        <div className="container mx-auto">
          
                    <h2 className="text-3xl font-bold text-gray-800 mb-4  text-center">Get in Touch for Tailored Solutions!</h2>
           
                    
                   <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)} className="max-w-md mx-auto  bg-white p-8 rounded-2xl ">
                            <div className="mb-4">
                                <FormField 
                                    control={form.control}
                                    name="name"
                                    render={({field }) =>{
                                        return <FormItem>
                                            <FormLabel className="block text-gray-700 font-bold mb-2" >Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="name" type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"  {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    }}
                                />
                               
                            </div>
                            <div className="mb-4">

                            <FormField 
                                    control={form.control}
                                    name="email"
                                    render={({field }) =>{
                                        return <FormItem>
                                            <FormLabel className="block text-gray-700 font-bold mb-2" >Email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="email" type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"  {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    }}
                                />

                            </div>
                            <div className="mb-4">

                            <FormField 
                                    control={form.control}
                                    name="message"
                                    render={({field }) =>{
                                        return <FormItem>
                                            <FormLabel className="block text-gray-700 font-bold mb-2" >Message</FormLabel>
                                            <FormControl>
                                                <Textarea placeholder="Type your message here."  rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"  {...field}/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    }}
                                />

                            </div>
                            <MovingBorderBtn type="submit" className="bg-blue-500 border-green-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">Send Message</MovingBorderBtn>
                        </form>
                    </Form> 
               
        </div>
    </section>
  )
}

export default Contact