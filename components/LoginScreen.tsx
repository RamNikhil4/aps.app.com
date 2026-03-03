import { Check, Star } from "lucide-react";
import LoginForm from "./LoginForm";

const LoginScreen = () => {
  return (
    <div
      className="min-h-screen p-6 text-white"
      style={{
        background: `linear-gradient(135deg, #0c1117 0%,#0f1c24 20%,#12383b 40%,#1c5c5e 55%,#f07a32 75%,#c4472d 88%,#2a0f14 100%)`,
      }}
    >
      <div className="flex items-center space-x-2">
        <div className="h-6 w-6 rounded-full bg-teal-400 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-white absolute"></div>
        </div>
        <span className="text-xl font-bold tracking-tight">aps</span>
      </div>

      <div className="w-full  mx-auto px-7 pt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-12 pr-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-zinc-100">
              Expert level Cybersecurity <br /> in{" "}
              <span className="text-teal-400">hours</span> not weeks.
            </h1>

            <div className="pt-2">
              <h3 className="font-semibold text-lg text-zinc-100 mb-4">
                What's included
              </h3>
              <ul className="space-y-4 text-zinc-300">
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>
                    Effortlessly spider and map targets to uncover hidden
                    security flaws
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>
                    Deliver high-quality, validated findings in hours, not
                    weeks.
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-3 h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                  <span>
                    Generate professional, enterprise-grade security reports
                    automatically.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Trustpilot */}
          <div className="pt-12">
            <div className="flex items-center space-x-1 text-teal-500 mb-2">
              <Star className="h-4 w-4 fill-current" />
              <span className="font-semibold text-sm text-zinc-100">
                Trustpilot
              </span>
            </div>
            <p className="font-medium">
              Rated 4.5/5.0{" "}
              <span className="text-zinc-500 text-sm font-normal">
                (100k+ reviews)
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
