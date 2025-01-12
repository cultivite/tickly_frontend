"use client"

import { Field, Form, Formik, FormikHelpers } from "formik";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/auth.store";
import { ILoginFormValues } from "./_types/login.types";
import { LoginSchema } from "./_form-model/login-validation";

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
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" />
              {touched.username && <div>{errors.username}</div>}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              {touched.password && <div>{errors.password}</div>}
            </div>

            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;