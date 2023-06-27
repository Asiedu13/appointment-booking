import Link from "next/link";
import localFont from "next/font/local";
import Image from "next/image";
import google_img from "./media/imgs/google logo.svg";
const matterHeavy = localFont({ src: "./matter_font/Matter-Heavy.ttf" });
import TextInput from "../components/input";
import CustomBtn from "../components/button";
import { SubmitButton } from "../components/button";

export default function SignIn() {
  return (
    <section className="flex justify-center items-center border-solid border-blue-100 border-2 h-screen">
      <div className="max-w-5xl w-[440px] h-[519px] shadow-md rounded-2xl bg-[#fff] p-10 ">
        {/* Greetingd */}
        <header className="flex flex-col justify-center items-center">
          <h1 className={` ${matterHeavy.className} text-3xl font-black`}>
            Welcome back
          </h1>
          <div id="a_bit_lost" className="flex justify-center items-center">
            <p className="text-[#AAAFAE] text-sm">New to bookings.com?</p>
            <span>
              <Link href="/sign_up" className="font-normal text-sm">
                {" "}
                &nbsp; Create an account
              </Link>
            </span>
          </div>
        </header>

        {/* Sign in content */}

        <section className="w-[360px] h-[364px] mt-[32px]">
          {/* Signing in with google */}
          <CustomBtn>
            <Image src={google_img} alt="Google logo" /> &nbsp; Sign in with
            Google
          </CustomBtn>

          {/* or */}
          <div className=" flex items-center justify-around relative mb-[10px]">
            <div className="float-left w-[45%] mr-2">
              <hr />
            </div>
            <p className="text-[#808785]">or</p>
            <div className="float-right ml-2 w-[45%]">
              <hr />
            </div>
          </div>

          {/* Sign in by mail */}
          <TextInput
            name="Email"
            type="text"
            placeholder="johndoe@example.com"
          />
          <div>
            <TextInput name="Password" type="password">
              <Image
                src="./media/imgs/eye_icon.svg"
                alt="show hidden password icon"
                width={200}
                height={200}
              />
            </TextInput>
            <Link href="/forgot" className="ml-[63%] font-semibold">
              Forgot password?
            </Link>
          </div>

          <SubmitButton>Sign in</SubmitButton>
        </section>
      </div>
    </section>
  );
}
