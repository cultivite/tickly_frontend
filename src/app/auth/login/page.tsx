"use client"

import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { ILoginFormValues } from "./_types/login.types";
import { LoginSchema } from "./_form-model/login-validation";
import Link from "next/link";

const Login = () => {
  const { login, user, token } = useAuthStore();
  const router = useRouter();

  if (token) {
    if (user?.role === "ADMIN" || user?.role === "SUPERADMIN") {
      router.replace("/admin");
    } else {
      router.replace("/");
    }
  }

  const handleSubmit = async (
    values: ILoginFormValues,
    { setSubmitting }: FormikHelpers<ILoginFormValues>
  ) => {
    try {
      await login(values.username, values.password);
      if (user?.role === "ADMIN" || user?.role === "SUPERADMIN") {
        router.replace("/admin");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{ username: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form className="w-[20rem] bg-deepNavy p-4 mx-auto my-2 rounded-3xl flex flex-col md:w-[35.625rem] md:px-16">
            <div className="text-center">
              <h1 className="text-3xl font-semibold py-4 md:text-5xl">Welcome to Tickly!</h1>
              <h2 className="text-sm">Please Sign in</h2>
            </div>
            <div className="flex flex-col py-2">
              <label htmlFor="username">Username</label>
              <Field  name="username" 
                      type="text" 
                      placeholder="Username"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600"/>
              {touched.username && <div>{errors.username}</div>}
            </div>

            <div className="flex flex-col py-2">
              <label htmlFor="password">Password</label>
              <Field  name="password" 
                      type="password" 
                      placeholder="Password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600"/>
              {touched.password && <div>{errors.password}</div>}
            </div>

            <button type="submit" 
                    disabled={isSubmitting}
                    className="rounded-lg bg-crimsonBlaze w-full py-[0.75rem] text-[1.125] font-semibold hover:bg-rosySunset mt-[2rem]">
              Login
            </button>

            <div className="text-sm py-2 flex gap-2 justify-center">
              Dont have an account?
              <Link href={"/"}
                    className="text-crimsonBlaze hover:underline">Register</Link>
            </div>
            
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;