"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import google_img from "./media/imgs/google logo.svg";
import eye_on from "./media/imgs/eye_icon.svg";
import eye_off from "./media/imgs/eye-off.svg";
import RegHeader from "./components/RegistrationHeader";
import TextInput from "./components/input";
import CustomBtn from "./components/button";
import { SubmitButton } from "./components/button";

export default function SignIn() {
  const [passWord, setPassword] = useState();
  const [visible, setVisible] = useState(false);
  return (
    <section className="flex flex-col justify-center items-center  h-screen">
      <h1 className="mb-[40px] font-semibold">Bookings.com</h1>
      <div className="max-w-[100%] w-[440px] h-[519px] shadow-md rounded-2xl bg-[#fff] p-10 ">
        {/* Greetingd */}
        <RegHeader />

        {/******* Sign in content ***********/}
        <section className="w-[97%] h-[364px] mt-[32px] ">
          {/* Signing in with google */}
          <Link
            href="/api/auth/signin"
            onClick={(e) => {
              e.preventDefault();
              signIn('google', {callbackUrl: '/home'});
            }}
          >
            <CustomBtn>
              <Image src={google_img} alt="Google logo" /> &nbsp; Sign in with
              Google
            </CustomBtn>
          </Link>

          {/* or */}
          <div className=" flex items-center justify-around relative mb-[10px]">
            <div className="float-left w-[40%] mr-2">
              <hr />
            </div>
            <p className="text-[#808785]">or</p>
            <div className="float-right ml-2 w-[40%]">
              <hr />
            </div>
          </div>

          {/********* Sign in the traditional way ************/}
          <TextInput
            name="Email"
            type="text"
            placeholder="johndoe@example.com"
          />
          <div>
            <TextInput name="Password" type="password" visible={visible}>
              <Image
                src={visible ? eye_off : eye_on}
                alt="show hidden password icon"
                width={20}
                height={10}
                onClick={() => setVisible(!visible)}
              />
            </TextInput>
          </div>

          <Link
            href="/forgot"
            className="ml-[55%]  font-semibold text-sm md:ml-[65%]"
          >
            Forgot password?
          </Link>

          <SubmitButton>Sign in</SubmitButton>
        </section>
      </div>
    </section>
  );
}
