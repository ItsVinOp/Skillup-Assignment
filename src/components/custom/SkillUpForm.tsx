import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import axios from "axios";
import { Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  username: z
    .string()
    .min(2, "Username must be at least 2 characters long")
    .max(50, "Username must be less than 50 characters long")
    .trim()
    .refine((val) => val.trim().length > 0, {
      message: "Username cannot be empty or just spaces",
    }),
  email: z
    .string()
    .email("Please enter a valid email")
    .trim()
    .refine((val) => val.trim().length > 0, {
      message: "Email cannot be empty or just spaces",
    }),
  phonenumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(10, "Phone number cannot exceed 10 digits")
    .refine((val) => /^\d+$/.test(val), {
      message: "Phone number must only contain digits",
    }),
  qualification: z.string().nonempty("Qualification is required"),
  message: z.string(), // Optional field, no validation
});

const SkillUpForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      phonenumber: "",
      qualification: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    axios
      .post(`${import.meta.env.VITE_BACKEND}/submit`, values)
      .then((_) => {
        form.reset();
        toast({
          title: "Form Submitted",
          description: "Your form has been successfully submitted!",
        });
      })
      .catch((err) => {
        console.error(err);
        toast({
          title: "Submission Failed",
          description: "There was an error submitting the form.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="form shadow p-6 relative z-10">
      <h1 className="text-center text-3xl mt-5 font-semibold text-green-three">
        Let's Connect
      </h1>
      <p className="px-5 text-center text-lg text-black-100 my-4">
        Let's align our constellations! Reach out and let the magic of
        collaboration illuminate our skies.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name Field */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Full Name <span className="text-red-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Full Name" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email <span className="text-red-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

          {/* Phone Number Field */}
          <FormField
            control={form.control}
            name="phonenumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Phone Number <span className="text-red-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
          />

          {/* Qualification Field */}
          <FormField
            control={form.control}
            name="qualification"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Qualification <span className="text-red-primary">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Qualifications" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Graduated / pursuing">Graduated / Pursuing</SelectItem>
                    <SelectItem value="Masters / pursuing">Masters / Pursuing</SelectItem>
                    <SelectItem value="Diploma / pursuing">Diploma / Pursuing</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage/>
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage/>  
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-green-tertiary to-50% to-green-three rounded-sm text-white font-semibold"
          >
            {isLoading ? (
              <Loader />
            ) : (
              <div className="flex items-center gap-2">
                Get Free Career Evaluation{" "}
                <img src="/icons/rocket.svg" alt="icons" width={20} />
              </div>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default SkillUpForm;
