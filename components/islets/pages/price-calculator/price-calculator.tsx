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
import { Checkbox } from "../../../ui/checkbox";
import { items } from "@/lib/const-data/price-calculator/price-calculator-data";
import { materials } from "@/lib/const-data/price-calculator/price-calculator-data";
import { briefkasten } from "@/lib/const-data/price-calculator/price-calculator-data";
import { klingel } from "@/lib/const-data/price-calculator/price-calculator-data";

const FormSchema = z
  .object({
    items: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "Mindestens ein Artikel muss ausgewählt werden.",
    }),
    zauneLength: z.string().optional(),
    zauneHeight: z.string().optional(),
    toreLength: z.string().optional(),
    toreHeight: z.string().optional(),
    pforteLength: z.string().optional(),
    pforteHeight: z.string().optional(),
    gelanderLength: z.string().optional(),
    gelanderHeight: z.string().optional(),
    carportsLength: z.string().optional(),
    carportsHeight: z.string().optional(),
    doppelstabmattenLength: z.string().optional(),
    doppelstabmattenHeight: z.string().optional(),
    gitterLength: z.string().optional(),
    gitterHeight: z.string().optional(),
    material: z.string({
      required_error: "Bitte wählen Sie die Materialart aus.",
    }),
    briefkasten: z.enum(briefkasten, {
      required_error: "Bitte wählen Sie Ihre Postfachoptionen aus.",
    }),
    klingel: z.enum(klingel, {
      required_error: " Bitte wählen Sie die Klingeltonoptionen aus.",
    }),
    username: z.string().min(2, {
      message: "Der Name muss mindestens 2 Zeichen haben.",
    }),
    address: z.string().min(2, {
      message: "Die Adresse muss mindestens 2 Zeichen haben.",
    }),
    ort: z.string().min(2, {
      message: "Der Ort muss mindestens 2 Zeichen haben.",
    }),
    postleitzahl: z.string().min(2, {
      message: "Die Postleitzahl muss mindestens 2 Zeichen haben.",
    }),
    phone: z.string().min(2, {
      message: "Bitte geben Sie eine gültige Telefon an.",
    }),
    email: z.string().email({
      message: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
    }),
    message: z
      .string()
      .min(15, {
        message: "Die Nachricht muss mindestens 15 Zeichen haben.",
      })
      .max(1200, {
        message: "Die Nachricht ist zu lang.",
      }),
  })
  .refine(
    (schema) => (schema.items.includes("zaune") ? !!schema.zauneLength : true),
    {
      message: "Bitte geben Sie die Länge des Zauns an",
      path: ["zauneLength"],
    },
  )
  .refine(
    (schema) => (schema.items.includes("zaune") ? !!schema.zauneHeight : true),
    {
      message: "Bitte geben Sie die Breite des Zauns an",
      path: ["zauneHeight"],
    },
  )
  .refine(
    (schema) => (schema.items.includes("tore") ? !!schema.toreLength : true),
    {
      message: "Bitte geben Sie die Länge des Tors an",
      path: ["toreLength"],
    },
  )
  .refine(
    (schema) => (schema.items.includes("tore") ? !!schema.toreHeight : true),
    {
      message: "Bitte geben Sie die Breite des Tores ein",
      path: ["toreHeight"],
    },
  )
  .refine(
    (schema) =>
      schema.items.includes("pforte") ? !!schema.pforteLength : true,
    {
      message: "Bitte geben Sie die Länge des Pforte an",
      path: ["pforteLength"],
    },
  )
  .refine(
    (schema) =>
      schema.items.includes("pforte") ? !!schema.pforteHeight : true,
    {
      message: "Bitte geben Sie die Breite des Pforte ein",
      path: ["pforteHeight"],
    },
  )
  .refine(
    (schema) =>
      schema.items.includes("gelander") ? !!schema.gelanderLength : true,
    {
      message: "Bitte geben Sie die Länge des Geländer an",
      path: ["gelanderLength"],
    },
  )
  .refine(
    (schema) =>
      schema.items.includes("gelander") ? !!schema.gelanderHeight : true,
    {
      message: "Bitte geben Sie die Breite des Geländer ein",
      path: ["gelanderHeight"],
    },
  )
  .refine(
    (schema) =>
      schema.items.includes("carports") ? !!schema.carportsLength : true,
    {
      message: "Bitte geben Sie die Länge des Carporte an",
      path: ["carportsLength"],
    },
  )
  .refine(
    (schema) =>
      schema.items.includes("carports") ? !!schema.carportsHeight : true,
    {
      message: "Bitte geben Sie die Breite des Carporte ein",
      path: ["carportsHeight"],
    },
  )
  .refine(
    (schema) =>
      schema.items.includes("doppelstabmatten")
        ? !!schema.doppelstabmattenLength
        : true,
    {
      message: "Bitte geben Sie die Länge des Doppelstabmatten an",
      path: ["doppelstabmattenLength"],
    },
  )
  .refine(
    (schema) =>
      schema.items.includes("doppelstabmatten")
        ? !!schema.doppelstabmattenHeight
        : true,
    {
      message: "Bitte geben Sie die Breite des Doppelstabmatten ein",
      path: ["doppelstabmattenHeight"],
    },
  )
  .refine(
    (schema) =>
      schema.items.includes("gitter") ? !!schema.gitterLength : true,
    {
      message: "Bitte geben Sie die Länge des Gitter an",
      path: ["gitterLength"],
    },
  )
  .refine(
    (schema) =>
      schema.items.includes("gitter") ? !!schema.gitterHeight : true,
    {
      message: "Bitte geben Sie die Breite des Gitter ein",
      path: ["gitterHeight"],
    },
  );

export function PriceCalculator() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [""],
      phone: "",
      ort: "",
      address: "",
      postleitzahl: "",
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
      await fetch("/api/sendConfirmPriceCalculatorForm", {
        method: "POST",
        body: JSON.stringify({
          items: data.items,
          zauneLength: data.zauneLength,
          zauneHeight: data.zauneHeight,
          toreLength: data.toreLength,
          toreHeight: data.toreHeight,
          pforteLength: data.pforteLength,
          pforteHeight: data.pforteHeight,
          gelanderLength: data.gelanderLength,
          gelanderHeight: data.gelanderHeight,
          carportsLength: data.carportsLength,
          carportsHeight: data.carportsHeight,
          doppelstabmattenLength: data.doppelstabmattenLength,
          doppelstabmattenHeight: data.doppelstabmattenHeight,
          gitterLength: data.gitterLength,
          gitterHeight: data.gitterHeight,
          material: data.material,
          briefkasten: data.briefkasten,
          klingel: data.klingel,
          username: data.username,
          address: data.address,
          ort: data.ort,
          postleitzahl: data.postleitzahl,
          phone: data.phone,
          email: data.email.toLowerCase(),
          message: data.message,
        }),
      });

      await fetch("/api/sendPriceCalculatorForm", {
        method: "POST",
        body: JSON.stringify({
          username: data.username,
          email: data.email.toLowerCase(),
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
    <div className="flex justify-center">
      <div className="flex flex-col items-center rounded-lg border py-4 shadow-2xl md:items-start">
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
                      Was brauchen Sie?
                    </FormLabel>
                  </div>
                  <div className="flex flex-col space-y-2.5 lg:flex-row lg:space-y-0">
                    {items.map((item, idx) => (
                      <FormField
                        key={idx}
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
                                            (value?) => value !== item.id,
                                          ),
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
                    Wählen Sie aus, was wir für Sie tun sollen.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("items").includes("zaune") ? (
              <div>
                <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
                  <FormField
                    control={form.control}
                    name="zauneLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="zauneLength">
                          Länge des Zauns
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Bitte geben Sie die Länge des Zauns an..."
                            {...field}
                            id="zauneLength"
                            name="zauneLength"
                            autoComplete="off"
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
                          Höhe des Zauns
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Bitte geben Sie die Höhe des Zauns an..."
                            {...field}
                            id="zauneHeight"
                            name="zauneHeight"
                            autoComplete="off"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Geben Sie die Länge Des Zauns und die Höhe einer einzelnen
                  Spannweite ein.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            {form.watch("items").includes("tore") ? (
              <div>
                <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
                  <FormField
                    control={form.control}
                    name="toreLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="toreLength">
                          Länge des Tore
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Länge des Tore eingeben..."
                            {...field}
                            id="toreLength"
                            name="toreLength"
                            autoComplete="off"
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
                          Höhe des Tore
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Höhe des Tore eingeben..."
                            {...field}
                            id="toreHeight"
                            name="toreHeight"
                            autoComplete="off"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Geben Sie die Länge und die Höhe Des Tore.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            {form.watch("items").includes("pforte") ? (
              <div>
                <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
                  <FormField
                    control={form.control}
                    name="pforteLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="pforteLength">
                          Länge des Pforte
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Länge des Pforte eingeben..."
                            {...field}
                            id="pforteLength"
                            name="pforteLength"
                            autoComplete="off"
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
                          Höhe des Pforte
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Höhe des Pforte eingeben..."
                            {...field}
                            id="pforteHeight"
                            name="pforteHeight"
                            autoComplete="off"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Geben Sie die Länge und die Höhe Des Pforte.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            {form.watch("items").includes("gelander") ? (
              <div>
                <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
                  <FormField
                    control={form.control}
                    name="gelanderLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="gelanderLength">
                          Länge des Geländer
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Länge des Geländer eingeben..."
                            {...field}
                            id="gelanderLength"
                            name="gelanderLength"
                            autoComplete="off"
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
                          Höhe des Geländer
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Höhe des Geländer eingeben..."
                            {...field}
                            id="gelanderHeight"
                            name="gelanderHeight"
                            autoComplete="off"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Geben Sie die Länge und die Höhe Des Geländer.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            {form.watch("items").includes("carports") ? (
              <div>
                <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
                  <FormField
                    control={form.control}
                    name="carportsLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="carportsLength">
                          Länge des Carports
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Länge des Carports eingeben..."
                            {...field}
                            id="carportsLength"
                            name="carportsLength"
                            autoComplete="off"
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
                          Höhe des Carports
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Höhe des Carports eingeben..."
                            {...field}
                            id="carportsHeight"
                            name="carportsHeight"
                            autoComplete="off"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Geben Sie die Länge und die Höhe Des Carports.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            {form.watch("items").includes("doppelstabmatten") ? (
              <div>
                <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
                  <FormField
                    control={form.control}
                    name="doppelstabmattenLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="doppelstabmattenLength">
                          Länge des Doppelstabmatten
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Länge des Doppelstabmatten eingeben..."
                            {...field}
                            id="doppelstabmattenLength"
                            name="doppelstabmattenLength"
                            autoComplete="off"
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
                          Höhe des Doppelstabmatten
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Höhe des Doppelstabmatten eingeben..."
                            {...field}
                            id="doppelstabmattenHeight"
                            name="doppelstabmattenHeight"
                            autoComplete="off"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Geben Sie die Länge und die Höhe Des Doppelstabmatten.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            {form.watch("items").includes("gitter") ? (
              <div>
                <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
                  <FormField
                    control={form.control}
                    name="gitterLength"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel htmlFor="gitterLength">
                          Länge des Gitter
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Länge des Gitter eingeben..."
                            {...field}
                            id="gitterLength"
                            name="gitterLength"
                            autoComplete="off"
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
                          Höhe des Gitter
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Höhe des Gitter eingeben..."
                            {...field}
                            id="gitterHeight"
                            name="gitterHeight"
                            autoComplete="off"
                            className="sm:w-[25.7rem]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormDescription className="mt-2">
                  Geben Sie die Länge und die Höhe Des Gitter.
                </FormDescription>
              </div>
            ) : (
              ""
            )}
            <FormField
              control={form.control}
              name="material"
              render={({ field }) => (
                <FormItem className="sm:w-[25.7rem]">
                  <FormLabel>Welches Material?</FormLabel>
                  <Select
                    name="material"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Material auswählen" />
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
                    Wählen Sie das Material, aus dem Ihr Zaun gefertigt werden
                    soll.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="briefkasten"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel htmlFor="briefkasten">
                    Möchten Sie einen Briefkasten haben?
                  </FormLabel>
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
                  <FormLabel htmlFor="klingel">
                    Möchten Sie Sie eine Klingel haben?
                  </FormLabel>
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
                          Klingel im Zaun
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
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
                        autoComplete="on"
                        className="sm:w-[25.7rem]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="address">
                      Straße und Hausnummer
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Geben Sie Ihre Straße und Hausnummer ein..."
                        {...field}
                        id="address"
                        name="address"
                        autoComplete="on"
                        className="sm:w-[25.7rem]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
              <FormField
                control={form.control}
                name="ort"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="ort">Ort</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Schreiben Sie Ihren Wohnort..."
                        {...field}
                        id="ort"
                        name="ort"
                        autoComplete="on"
                        className="sm:w-[25.7rem]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="postleitzahl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="postleitzahl">Postleitzahl</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Schreiben Sie Ihre Postleitzahl..."
                        {...field}
                        id="postleitzahl"
                        name="postleitzahl"
                        autoComplete="on"
                        className="sm:w-[25.7rem]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="phone">Ihre Telefonnummer</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Schreiben Sie Ihre Ihre Telefonnummer..."
                        {...field}
                        id="phone"
                        name="phone"
                        autoComplete="on"
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
                        placeholder="Schreiben Sie Ihre E-mail..."
                        {...field}
                        id="email"
                        name="email"
                        autoComplete="on"
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
                <FormItem className="sm:w-[25.7rem] lg:w-full">
                  <FormLabel htmlFor="message">Nachricht</FormLabel>
                  <FormControl>
                    <p className="first-letter:capitalize">
                      <Textarea
                        placeholder="Schreiben Sie Ihre Nachricht..."
                        {...field}
                        id="message"
                        name="message"
                        autoComplete="off"
                      />
                    </p>
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
                Die E-Mail wurde erfolgreich gesendet. Bitte überprüfen Sie Ihre
                E-Mail.
              </div>
            )}
          </form>
        </Form>
      </div>
    </div>
  );
}
