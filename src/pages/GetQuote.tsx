import { useForm } from "react-hook-form"
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form"
import Select, {
  SelectTrigger,
  SelectContent,
  SelectItem
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

type QuoteFormData = {
  serviceType: string
  name: string
  email: string
  company: string
  phone: string
  message: string
}

const serviceOptions = [
  { label: "Ground Transportation", value: "ground-transportation" },
  { label: "Ocean Freight", value: "ocean-freight" },
  { label: "Air Cargo", value: "air-cargo" },
  { label: "Warehousing", value: "warehousing" },
  { label: "Supply Chain", value: "supply-chain" },
  { label: "Logistics Analytics", value: "logistics-analytics" },
]

const GetQuote = () => {
  const form = useForm<QuoteFormData>({
    defaultValues: {
      serviceType: "",
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  })

  const onSubmit = (data: QuoteFormData) => {
    console.log("Submitted data:", data)
    // You can send data to API here
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Request a Quote</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Service Type */}
            <FormField
              control={form.control}
              name="serviceType"
              rules={{ required: "Service type is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Type *</FormLabel>
                  <FormControl>
                    <Select
                      value={field.value}
                      onValueChange={field.onChange}
                      options={serviceOptions}
                      placeholder="Select service type"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Company */}
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Company name (optional)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              rules={{ required: "Phone number is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone *</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="Phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Your message or additional details..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full md:w-fit">
            Submit Quote Request
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default GetQuote
