import Logo from "../assets/PNG/logo.png";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/ui/input";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import OnboardingLayout from "../layout/OnboardingLayout";
import { EyeOff, Eye } from "lucide-react";

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
// const passwordValidation = new RegExp(
//   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
// );

const formSchema = z.object({
  email: z.string().email("Enter a valid email address.").min(1, {
    message: "Email is required.",
  }),
  password: z.string().min(1, { message: "Must have at least 1 character" }),
});

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    console.log({ values });
  }

  return (
    <OnboardingLayout
      feedback="“I love how intuitive AccMan interface is, making it easy to
    navigate and manage multiple accounts seamlessly.”"
      author="Idris Alabi"
    >
      <div className="w-5/6 lg:w-[60%]">
        <div>
          <img src={Logo} alt="Logo" className="h-[20px] md:h-[34px]" />
        </div>
        <h1 className="md:text-4xl text-2xl font-medium leading-[40px] mt-7">
          Welcome back!
        </h1>
        <p className="mt-px text-base font-normal text-neutral-600">
          Sign in to your account
        </p>
        <Form {...form}>
          <form className="mt-10 space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
                      className="border-neutral-300"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Password"
                      className="border-neutral-300"
                      type={showPassword ? "text" : "password"}
                      {...field}
                      rightIcon={
                        showPassword ? (
                          <Eye
                            className="cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        ) : (
                          <EyeOff
                            className="cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        )
                      }
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
          <p className="mt-2 text-sm font-semibold text-purple-600">
            <Link to="/reset-password" className="text-primary">
              Forgot password?
            </Link>
          </p>
          <Button
            onClick={form.handleSubmit(onSubmit)}
            className="w-full h-12 mt-6 bg-violet-600 hover:bg-violet-400"
          >
            Sign In
          </Button>
          <p className="mt-4 text-sm text-center">
            Don’t have an account ?{" "}
            <span className="font-semibold text-violet-600">
              <Link to={"/create-account"}>Create an account</Link>
            </span>
          </p>
        </Form>
      </div>
    </OnboardingLayout>
  );
};

export default Login;
