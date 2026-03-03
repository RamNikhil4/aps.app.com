"use client";

import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="w-full max-w-[400px] bg-white rounded-[24px] p-6 sm:p-8 shadow-xl text-zinc-900 border border-zinc-100">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-1 tracking-tight">Sign up</h2>
        <p className="text-sm text-zinc-600 font-medium">
          Already have an account?{" "}
          <a
            href="#"
            className="text-teal-600 hover:underline hover:text-teal-700"
          >
            Log in
          </a>
        </p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="First name*"
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-zinc-400 font-medium text-sm"
          />
          <input
            type="text"
            placeholder="Last name*"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-zinc-400 font-medium"
          />
          <input
            type="email"
            placeholder="Email address*"
            className="w-full px-4 py-3 rounded-xl border border-zinc-200 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-zinc-400 font-medium"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password (8+ characters)*"
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all placeholder:text-zinc-400 font-medium pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600"
            >
              {showPassword ? (
                <EyeClosed className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-start py-2">
          <div className="flex items-center h-5 mt-0.5">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 rounded border-zinc-300 text-teal-600 focus:ring-teal-600"
            />
          </div>
          <label
            htmlFor="terms"
            className="ml-3 text-sm text-zinc-600 leading-tight"
          >
            I agree to Aps's{" "}
            <a href="#" className="text-teal-600 hover:underline">
              Terms & Conditions
            </a>{" "}
            and acknowledge the{" "}
            <a href="#" className="text-teal-600 hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3.5 px-4 bg-[#149f98] hover:bg-[#118c85] text-white rounded-full font-medium transition-colors"
        >
          Create account
        </button>
      </form>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button className="flex-1 h-12 bg-black hover:bg-zinc-900 flex items-center justify-center rounded-full transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25"
            />
          </svg>
        </button>

        <button className="flex-1 h-12 bg-[#fdf5f2] hover:bg-[#fcebe5] flex items-center justify-center rounded-full transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
        </button>

        <button className="flex-1 h-12 bg-[#3f65cf] hover:bg-[#3459c0] flex items-center justify-center rounded-full transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffffff"
              d="M16.354 5.354c-1.64 0-2.922 1.236-4.083 2.805c-1.594-2.03-2.928-2.805-4.524-2.805C4.493 5.354 2 9.59 2 14.071c0 2.805 1.357 4.574 3.63 4.574c1.636 0 2.812-.771 4.903-4.427l1.472-2.6q.316.51.664 1.097l.98 1.65c1.911 3.197 2.976 4.28 4.905 4.28c2.214 0 3.446-1.793 3.446-4.656c0-4.693-2.55-8.635-5.646-8.635m-7.415 7.874c-1.696 2.658-2.283 3.254-3.227 3.254c-.971 0-1.549-.853-1.549-2.374c0-3.254 1.623-6.581 3.557-6.581c1.047 0 1.922.605 3.263 2.524c-1.273 1.952-2.044 3.177-2.044 3.177m6.4-.335l-1.173-1.955a41 41 0 0 0-.915-1.425c1.057-1.632 1.929-2.444 2.965-2.444c2.154 0 3.877 3.17 3.877 7.066c0 1.485-.486 2.347-1.494 2.347c-.965 0-1.427-.638-3.26-3.589"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
