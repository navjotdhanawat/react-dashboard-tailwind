import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import Navbar from "../components/PublicNavbar.js";
import FooterSmall from "../components/FooterSmall.js";
import Context from "../utils/context";
import { Button, Input } from "../components/lib";

const schema = yup.object().shape({
  firstname: yup.string().required("Firstname is required"),
  lastname: yup.string().required("Lastname is required"),
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

export default function Register(props) {
  const context = useContext(Context);
  const { register, handleSubmit, watch, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => context.handleUserLogin(data);

  useEffect(() => {
    console.log("context.authState: ", context.authState);
    if (context.authState) {
      props.history.push("/");
    }
  }, [context.authState]);

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <>
      <Navbar transparent />
      <main>
        <section className="absolute w-full h-full bg-gray-900">
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-center mb-3 px-6 py-6">
                      <h6 className="uppercase text-gray-600 text-sm font-bold">
                        Signup
                      </h6>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="relative w-full mb-3">
                        <div className="flex flex-wrap -mx-3">
                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <Input
                              label="First Name"
                              placeholder="Jane"
                              type="text"
                              requiredError={errors.firstname}
                            />
                          </div>
                          <div className="w-full md:w-1/2 px-3">
                            <Input
                              label="Last Name"
                              placeholder="Doe"
                              type="text"
                              requiredError={errors.lastname}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="relative w-full mb-3">
                        <Input
                          label="Email"
                          placeholder="JaneDoe@domain.com"
                          type="email"
                          requiredError={errors.email}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <Input
                          label="Password"
                          placeholder="********"
                          type="password"
                          requiredError={errors.password}
                        />
                      </div>
                      <div className="text-center mt-6">
                        <Button label="Sign In" type="submit" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
