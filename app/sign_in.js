import Link from "next/link";
import Image from "next/image";

import google_img from "./media/imgs/google logo.svg";
import eye_icon from "./media/imgs/eye_icon.svg";
import RegHeader from "../components/RegistrationHeader";
import TextInput from "../components/input";
import CustomBtn from "../components/button";
import { SubmitButton } from "../components/button";

export default function SignIn() {
  return (
    <section className="flex justify-center items-center  h-screen">
      <div className="max-w-[100%] w-[440px] h-[519px] shadow-md rounded-2xl bg-[#fff] p-10 ">
        {/* Greetingd */}
        <RegHeader />
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
            <TextInput name="Password" type="password" extraStyles={""}>
              <Image
                src={eye_icon}
                alt="show hidden password icon"
                width={20}
                height={10}
              />
            </TextInput>
          </div>

          <Link href="/forgot" className="ml-[67%] font-semibold text-sm">
            Forgot password?
          </Link>

          <SubmitButton>Sign in</SubmitButton>
        </section>
      </div>
    </section>
  );
}
