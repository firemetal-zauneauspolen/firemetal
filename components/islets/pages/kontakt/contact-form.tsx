"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import toast, { Toaster } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  message: z
    .string()
    .min(15, {
      message: "Die Nachricht muss mindestens 15 Zeichen haben.",
    })
    .max(1200, {
      message: "Die Nachricht ist zu lang.",
    }),
  username: z.string().min(2, {
    message: "Der Name muss mindestens 2 Zeichen haben.",
  }),
  email: z.string().email({
    message: "Ungültige E-Mail-Adresse.",
  }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      message: "",
      email: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const emailSent = form.formState.isSubmitSuccessful;

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const toastLoadingId = toast.loading("Email senden...");

    try {
      await fetch("/api/sendContactForm", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          email: data.email.toLowerCase(),
          message: data.message,
        }),
      });
      await fetch("/api/sendConfirmContanctForm", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          email: data.email.toLowerCase(),
          message: data.message,
        }),
      });
      toast.success("E-Mail korrekt gesendet", {
        id: toastLoadingId,
        duration: 3500,
      });
      form.reset();
    } catch (error) {
      console.error("Failed to send email: ", error);
      toast.error("Beim Senden der E-Mail ist aufgetreten", {
        id: toastLoadingId,
        duration: 3500,
      });
    }
  }

  return (
    <div className="flex w-full flex-col items-center rounded-lg border py-4 shadow-2xl md:items-start">
      <Toaster position="bottom-right" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6 px-4 caret-ring"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="username">Vorname</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Schreiben Sie Ihren Vorname..."
                    {...field}
                    id="username"
                    name="username"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Schreiben Sie Ihren E-mail..."
                    {...field}
                    id="email"
                    name="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="message">Nachricht</FormLabel>
                <FormControl>
                  <p className="first-letter:capitalize">
                    <Textarea
                      placeholder="Schreiben Sie Ihren Nachricht..."
                      {...field}
                      id="message"
                      name="message"
                    />
                  </p>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading} className="rounded-full font-semibold">
            Senden
          </Button>
          {emailSent && (
            <div className="inline-flex p-4 text-xs text-muted-foreground">
              Die E-Mail wurde erfolgreich gesendet. Bitte überprüfen Sie Ihre
              E-Mail
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}
