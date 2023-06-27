import Link from "next/link";
export default function SignIn() {
  return (
    <section className="flex justify-center items-center border-solid border-blue-100 border-2 h-screen">
      <div className="max-w-5xl w-[440px] h-[519px] shadow-md rounded-2xl bg-[#fff] p-10 ">
        {/* Greetingd */}
        <header className="border-solid border-red-100 border-2 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-black">Welcome back</h1>
          <div id="a_bit_lost" className="border-solid border-red-100 border-2 flex"
          >
            <p className="">New to bookings.com?</p>
            <span>
              <Link href="/sign_up">Create an account</Link>
            </span>
          </div>
        </header>

        {/* Sign in content */}
      </div>
    </section>
  );
}
