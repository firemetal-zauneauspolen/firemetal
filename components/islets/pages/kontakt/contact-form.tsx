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
      message: "Message must be at least 15 characters.",
    })
    .max(1200, {
      message: "Message is too long.",
    }),
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Write correct email address.",
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
    const toastLoadingId = toast.loading("Sending email...");

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
      toast.success("Sent email success", {
        id: toastLoadingId,
        duration: 3500,
      });
      form.reset();
    } catch (error) {
      console.error("Failed to send email: ", error);
      toast.error("Sent email error", {
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
                <FormLabel htmlFor="username">Imie</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Napisz swoje imie..."
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
                    placeholder="Napisz swoj email..."
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
                <FormLabel htmlFor="message">Wiadomosc</FormLabel>
                <FormControl>
                  <p className="first-letter:capitalize">
                    <Textarea
                      placeholder="Napisz swoja wiadomosc..."
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
              Email zostal wyslany poprawnie. Sprawdz prosze swoja skrzynke
              pocztowa.
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}
