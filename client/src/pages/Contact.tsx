import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { insertContactMessageSchema } from "@shared/schema";
import type { ContactMessageInput } from "@shared/routes";
import { useSubmitContact } from "@/hooks/use-contact";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export default function Contact() {
  const mutation = useSubmitContact();
  
  const form = useForm<ContactMessageInput>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: ContactMessageInput) {
    mutation.mutate(values, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <div className="min-h-screen pt-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with our team for inquiries, quotes, or partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative shadow-lg">
              {/* modern office building exterior */}
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" 
                alt="Office" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <MapPin className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">Headquarters</h3>
                <p className="text-muted-foreground text-sm">
                  Terrabridge Commodities Global Limited<br />
                  Lagos, Nigeria
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border">
                <Mail className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">Email Us</h3>
                <p className="text-muted-foreground text-sm">
                  info@terrabridgelimited.com<br />
                  sales@terrabridgelimited.com
                </p>
              </div>
              <div className="bg-card p-6 rounded-2xl border border-border sm:col-span-2">
                <Phone className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold text-foreground mb-2">Call Us</h3>
                <p className="text-muted-foreground text-sm">
                  +234 (0) 123 456 7890<br />
                  Mon-Fri, 8:00 AM - 5:00 PM (WAT)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-xl shadow-black/5"
          >
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Send a Message</h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="h-12 bg-background/50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" className="h-12 bg-background/50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+1234567890" className="h-12 bg-background/50" {...field} value={field.value || ''} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="How can we help you?" 
                          className="min-h-[150px] resize-none bg-background/50" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 text-lg rounded-xl bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/20 hover-elevate"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
