import SignIn from "./sign_in";
import { Matter } from "next/font/google";

const matter = Matter({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={` ${matter.className} h-screen w-screen bg-[#CCCFCE3D] border-solid border-blue-700 border-2`}
    >
      <SignIn />
    </main>
  );
}
