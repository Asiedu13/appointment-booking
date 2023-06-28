import SignIn from "./sign_in";
import localFont from "next/font/local";

const matter = localFont({ src: "./matter_font/Matter-Regular.ttf" });
export default function Home() {
  return (
    <main
      className={` ${matter.className} h-screen w-screen bg-[#CCCFCE3D] border-solid border-blue-700 border-2`}
    >
      <SignIn />
    </main>
  );
}
