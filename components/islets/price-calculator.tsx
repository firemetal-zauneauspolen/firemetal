"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import toast, { Toaster } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { items } from "@/lib/const-data/price-calculator/price-calculator-data";
import { materials } from "@/lib/const-data/price-calculator/price-calculator-data";
import { briefkasten } from "@/lib/const-data/price-calculator/price-calculator-data";
import { klingel } from "@/lib/const-data/price-calculator/price-calculator-data";

const FormSchema = z
  .object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    briefkasten: z.enum(briefkasten, {
      required_error: "You need to select a briefkasten option.",
    }),
    klingel: z.enum(klingel, {
      required_error: "You have to select at klingel option.",
    }),
    material: z.string({
      required_error: "Please select material.",
    }),
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
    zauneLength: z.string().optional(),
    zauneHeight: z.string().optional(),
    toreLength: z.string().optional(),
    toreHeight: z.string().optional(),
    pforteLength: z.string().optional(),
    pforteHeight: z.string().optional(),
    gelanderLength: z.string().optional(),
    gelanderHeight: z.string().optional(),
    uberdachungenLength: z.string().optional(),
    uberdachungenHeight: z.string().optional(),
    carportsLength: z.string().optional(),
    carportsHeight: z.string().optional(),
    doppelstabmattenLength: z.string().optional(),
    doppelstabmattenHeight: z.string().optional(),
    gitterLength: z.string().optional(),
    gitterHeight: z.string().optional(),
  })
  .refine(
    (schema) => (schema.items.includes("zaune") ? !!schema.zauneLength : true),
    {
      message: "Dlugosc plotu jest wymagana",
      path: ["zauneLength"],
    }
  )
  .refine(
    (schema) => (schema.items.includes("zaune") ? !!schema.zauneHeight : true),
    {
      message: "Szerokosc plotu jest wymagana",
      path: ["zauneHeight"],
    }
  )
  .refine(
    (schema) => (schema.items.includes("tore") ? !!schema.toreLength : true),
    {
      message: "Dlugosc tore jest wymagana",
      path: ["toreLength"],
    }
  )
  .refine(
    (schema) => (schema.items.includes("tore") ? !!schema.toreHeight : true),
    {
      message: "Szerokosc tore jest wymagana",
      path: ["toreHeight"],
    }
  )
  .refine(
    (schema) =>
      schema.items.includes("pforte") ? !!schema.pforteLength : true,
    {
      message: "Szerokosc pforte jest wymagana",
      path: ["pforteLength"],
    }
  )
  .refine(
    (schema) =>
      schema.items.includes("pforte") ? !!schema.pforteHeight : true,
    {
      message: "Szerokosc pforte jest wymagana",
      path: ["pforteHeight"],
    }
  )
  .refine(
    (schema) =>
      schema.items.includes("gelander") ? !!schema.gelanderLength : true,
    {
      message: "Szerokosc gelander jest wymagana",
      path: ["gelanderLength"],
    }
  )
  .refine(
    (schema) =>
      schema.items.includes("gelander") ? !!schema.gelanderHeight : true,
    {
      message: "Szerokosc gelander jest wymagana",
      path: ["gelanderHeight"],
    }
  )
  .refine(
    (schema) =>
      schema.items.includes("uberdachungen")
        ? !!schema.uberdachungenLength
        : true,
    {
      message: "Szerokosc uberdachungen jest wymagana",
      path: ["uberdachungenLength"],
    }
  )
  .refine(
    (schema) =>
      schema.items.includes("uberdachungen")
        ? !!schema.uberdachungenHeight
        : true,
    {
      message: "Szerokosc uberdachungen jest wymagana",
      path: ["uberdachungenHeight"],
    }
  )
  .refine(
    (schema) =>
      schema.items.includes("carports") ? !!schema.carportsLength : true,
    {
      message: "Szerokosc carports jest wymagana",
      path: ["carportsLength"],
    }
  )
  .refine(
    (schema) =>
      schema.items.includes("carports") ? !!schema.carportsHeight : true,
    {
      message: "Szerokosc carports jest wymagana",
      path: ["carportsHeight"],
    }
  )
  .refine(
    (schema) =>
      schema.items.includes("doppelstabmatten")
        ? !!schema.doppelstabmattenLength
        : true,
    {
      message: "Szerokosc doppelstabmatten jest wymagana",
      path: ["doppelstabmattenLength"],
    }
  )
  .refine(
    (schema) =>
      schema.items.includes("doppelstabmatten")
        ? !!schema.doppelstabmattenHeight
        : true,
    {
      message: "Szerokosc doppelstabmatten jest wymagana",
      path: ["doppelstabmattenHeight"],
    }
  )
  .refine(
    (schema) =>
      schema.items.includes("gitter") ? !!schema.gitterLength : true,
    {
      message: "Szerokosc gitter jest wymagana",
      path: ["gitterLength"],
    }
  )
  .refine(
    (schema) =>
      schema.items.includes("gitter") ? !!schema.gitterHeight : true,
    {
      message: "Szerokosc gitter jest wymagana",
      path: ["gitterHeight"],
    }
  );

export function PriceCalculator() {
  const [emailSent, setEmailSent] = useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [""],
      username: "",
      message: "",
      email: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

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
      setEmailSent(true);
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

    try {
      await fetch("/api/sendConfirmContanctForm", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          email: data.email.toLowerCase(),
          message: data.message,
        }),
      });
    } catch (error) {
      console.error("Failed to send email: ", error);
      toast.error("Sent email error", {
        id: toastLoadingId,
        duration: 3500,
      });
    }
  }

  return (
    <div className="flex justify-center">
      <div className="flex w-[54rem] flex-col items-center rounded-lg border py-4 shadow-2xl md:items-start">
        <Toaster position="bottom-right" />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 px-4 caret-ring"
          >
            <FormField
              control={form.control}
              name="items"
              render={() => (
                <FormItem>
                  <div>
                    <FormLabel htmlFor="zaune" className="text-base">
                      Co potrzebujesz?
                    </FormLabel>
                  </div>
                  <div className="flex flex-col space-y-2.5 lg:flex-row lg:space-y-0">
                    {items.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={item.id}
                              className="mr-3 flex space-y-0.5 sm:space-y-0.5"
                            >
                              <FormControl>
                                <Checkbox
                                  id={item.id}
                                  name={item.id}
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          item.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value?) => value !== item.id
                                          )
                                        );
                                  }}
                                  className="mr-1.5"
                                />
                              </FormControl>
                              <FormLabel
                                id={item.id}
                                htmlFor={item.id}
                                className="font-normal"
                              >
                                {item.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormDescription>
                    Wybierz wszystko co chcesz, żebyśmy dla Ciebie zrobili.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("items").includes("zaune") ? (
              <div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <FormField
                    control={form.control}
                    name="zauneLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="zauneLength">
                          Podaj długość zaune
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj dlugosc zaune..."
                            {...field}
                            id="zauneLength"
                            name="zauneLength"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="zauneHeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="zauneHeight">
                          Podaj wysokosc zaune
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj szerokosc zaune..."
                            {...field}
                            id="zauneHeight"
                            name="zauneHeight"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Podaj całkowitą długość swojego płotu oraz wysokość
                  pojedyńczego przęsła.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            {form.watch("items").includes("tore") ? (
              <div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <FormField
                    control={form.control}
                    name="toreLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="toreLength">
                          Podaj długość tore
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj dlugosc tore..."
                            {...field}
                            id="toreLength"
                            name="toreLength"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="toreHeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="toreHeight">
                          Podaj wysokosc tore
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj szerokosc tore..."
                            {...field}
                            id="toreHeight"
                            name="toreHeight"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Podaj całkowitą długość swojej bramy oraz jej wysokosc.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            {form.watch("items").includes("pforte") ? (
              <div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <FormField
                    control={form.control}
                    name="pforteLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="pforteLength">
                          Podaj długość pforte
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj dlugosc pforte..."
                            {...field}
                            id="pforteLength"
                            name="pforteLength"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pforteHeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="pforteHeight">
                          Podaj wysokosc pforte
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj szerokosc pforte..."
                            {...field}
                            id="pforteHeight"
                            name="pforteHeight"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Podaj całkowitą długość swojej pforte oraz jej wysokosc.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            {form.watch("items").includes("gelander") ? (
              <div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <FormField
                    control={form.control}
                    name="gelanderLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="gelanderLength">
                          Podaj długość gelander
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj dlugosc gelander..."
                            {...field}
                            id="gelanderLength"
                            name="gelanderLength"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gelanderHeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="gelanderHeight">
                          Podaj wysokosc gelander
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj szerokosc gelander..."
                            {...field}
                            id="gelanderHeight"
                            name="gelanderHeight"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Podaj całkowitą długość gelander oraz pojedyncza wysokosc.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            {form.watch("items").includes("uberdachungen") ? (
              <div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <FormField
                    control={form.control}
                    name="uberdachungenLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="uberdachungenLength">
                          Podaj długość uberdachungen
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj dlugosc uberdachungen..."
                            {...field}
                            id="uberdachungenLength"
                            name="uberdachungenLength"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="uberdachungenHeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="uberdachungenHeight">
                          Podaj wysokosc uberdachungen
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj szerokosc uberdachungen..."
                            {...field}
                            id="uberdachungenHeight"
                            name="uberdachungenHeight"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Podaj całkowitą długość uberdachungen oraz pojedyncza
                  wysokosc.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            {form.watch("items").includes("carports") ? (
              <div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <FormField
                    control={form.control}
                    name="carportsLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="carportsLength">
                          Podaj długość carports
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj dlugosc carports..."
                            {...field}
                            id="carportsLength"
                            name="carportsLength"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="carportsHeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="carportsHeight">
                          Podaj wysokosc carports
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj szerokosc carports..."
                            {...field}
                            id="carportsHeight"
                            name="carportsHeight"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Podaj całkowitą długość carports oraz pojedyncza wysokosc.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            {form.watch("items").includes("doppelstabmatten") ? (
              <div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <FormField
                    control={form.control}
                    name="doppelstabmattenLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="doppelstabmattenLength">
                          Podaj długość doppelstabmatten
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj dlugosc doppelstabmatten..."
                            {...field}
                            id="doppelstabmattenLength"
                            name="doppelstabmattenLength"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="doppelstabmattenHeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="doppelstabmattenHeight">
                          Podaj wysokosc doppelstabmatten
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj szerokosc doppelstabmatten..."
                            {...field}
                            id="doppelstabmattenHeight"
                            name="doppelstabmattenHeight"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Podaj całkowitą długość doppelstabmatten oraz pojedyncza
                  wysokosc.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            {form.watch("items").includes("gitter") ? (
              <div>
                <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                  <FormField
                    control={form.control}
                    name="gitterLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="gitterLength">
                          Podaj długość gitter
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj dlugosc gitter..."
                            {...field}
                            id="gitterLength"
                            name="gitterLength"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gitterHeight"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="gitterHeight">
                          Podaj wysokosc gitter
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Podaj szerokosc gitter..."
                            {...field}
                            id="gitterHeight"
                            name="gitterHeight"
                            autoComplete="true"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Podaj całkowitą długość gitter oraz pojedyncza wysokosc.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            <FormField
              control={form.control}
              name="material"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jaki materiał?</FormLabel>
                  <Select
                    name="material"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Wybierz materiał" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {materials.map((material) => (
                        <SelectItem key={material.id} value={material.id}>
                          {material.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Wybierz materiał z jakiego chcesz mieć wykonaną swoją
                    usługę.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="username">Imie i nazwisko</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Napisz swoje imie i naziwsko..."
                        {...field}
                        id="username"
                        name="username"
                        autoComplete="true"
                        className="sm:w-[25.7rem]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="username">
                      Straße und Hausnummer
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Napisz swoj Straße und Hausnummer..."
                        {...field}
                        id="username"
                        name="username"
                        autoComplete="true"
                        className="sm:w-[25.7rem]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="username">Ort</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Napisz swoj Ort..."
                        {...field}
                        id="username"
                        name="username"
                        autoComplete="true"
                        className="sm:w-[25.7rem]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="username">Postleitzahl</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Napisz swoj Postleitzahl..."
                        {...field}
                        id="username"
                        name="username"
                        autoComplete="true"
                        className="sm:w-[25.7rem]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="username">Numer telefonu</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Napisz swoj numer telefonu..."
                        {...field}
                        id="username"
                        name="username"
                        autoComplete="true"
                        className="sm:w-[25.7rem]"
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
                        autoComplete="true"
                        className="sm:w-[25.7rem]"
                      />
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
                  <FormLabel htmlFor="message">Wiadomosc</FormLabel>
                  <FormControl>
                    <p className="first-letter:capitalize">
                      <Textarea
                        placeholder="Napisz swoja wiadomosc..."
                        {...field}
                        id="message"
                        name="message"
                        autoComplete="false"
                      />
                    </p>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="briefkasten"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Czy chcesz skrzynke na listy?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Ohne Briefkasten" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Ohne Briefkasten
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Eingebaut im Zaun" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Eingebaut im Zäun
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Mit Stützen" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Mit Stützen
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="klingel"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Czy chcesz skrzynke na listy?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Ohne Klingel" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Ohne Klingel
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="Klingel w plocie" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Klingel w plocie
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="rounded-full font-semibold"
            >
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
    </div>
  );
}
