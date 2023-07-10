import SignIn from "./sign_in/page";
import localFont from "next/font/local";
import Link from 'next/link'
const matter = localFont({ src: "./matter_font/Matter-Regular.ttf" });
export default function Home() {
  return (
    <main className={` ${matter.className} h-screen w-screen bg-[#CCCFCE3D]`}>
      <p>This is the homepage</p>
      <Link href="/sign_in">
        {" "}
        <i>Direct to Sign In page</i>
      </Link>
    </main>
  );
}
