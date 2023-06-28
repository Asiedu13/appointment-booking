import localFont from "next/font/local";
import Link from "next/link";
const matterHeavy = localFont({ src: "./Matter-Heavy.ttf" });

export default function RegHeader() {
  return (
    <header className="flex flex-col justify-center items-center ">
      <h1 className={` ${matterHeavy.className} text-3xl font-black mb-[16px]`}>
        Welcome back
      </h1>
      <div id="a_bit_lost" className="flex justify-center items-center ">
        <p className="text-[#AAAFAE] text-sm">New to bookings.com?</p>
        <span>
          <Link
            href="/sign_up"
            className="font-semibold text-sm flex justify-center items-center"
          >
            {" "}
            &nbsp; Create an account
          </Link>
        </span>
      </div>
    </header>
  );
}
