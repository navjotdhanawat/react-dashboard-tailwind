import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import Navbar from "../components/PublicNavbar.js";
import FooterSmall from "../components/FooterSmall.js";
import Context from "../utils/context";
import {Checkbox, Input} from "../components/lib";

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

export default function Login(props) {
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
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src={require("../assets/img/github.svg")}
                        />
                        Github
                      </button>
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src={require("../assets/img/google.svg")}
                        />
                        Google
                      </button>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Or sign in with credentials</small>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="relative w-full mb-3">
                        <Input
                          ref={register({ required: true })}
                          label="Email"
                          placeholder="navjot@gmail.com"
                          type="email"
                          requiredError={errors.email}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <Input
                          ref={register({ required: true })}
                          label="Password"
                          placeholder="********"
                          type="password"
                          requiredError={errors.password}
                        />
                      </div>
                      <div>
                        <Checkbox label="Remember Me" />
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="submit"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign In
                        </button>
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
