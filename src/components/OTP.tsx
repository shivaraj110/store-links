import React, { useState, useRef } from "react";
import { ToastContainer } from "react-toastify";

interface OTPVerificationProps {
  onVerify: (otp: string) => void;
  onResend: () => void;
  email: string;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({
  onVerify,
  onResend,
  email,
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [timer, setTimer] = useState<number>(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (element: HTMLInputElement, index: number): void => {
    if (isNaN(Number(element.value))) return;
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    if (element.value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ): void => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleResend = (): void => {
    setTimer(30);
    onResend();
  };

  const handleVerify = (): void => {
    onVerify(otp.join(""));
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      <ToastContainer />
      <div className="bg-gradient-to-r from-blue-400 to-violet-400 p-8 mx-auto my-52 rounded-xl shadow-xl w-[400px]">
        <h1 className="text-2xl font-semibold text-black/60 mb-6">
          Verify OTP
        </h1>
        <p className="text-gray-600 mb-6">
          We have sent you OTP to {email || "your email"}
        </p>

        <div className="flex justify-between gap-2 mb-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(ref) => (inputRefs.current[index] = ref)}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-xl border bg-white/30 backdrop-blur-lg shadow-xl rounded focus:outline-none focus:border-blue-500"
            />
          ))}
        </div>

        <div className="items-center mt-10  bg-gradient-to-tr text-lg from-blue-600 text-gray-800 transi to-violet-700 shadow-xl hover:shadow-2xl rounded-xl border">
          <button
            onClick={handleVerify}
            type="submit"
            className="flex justify-center w-full p-1 border backdrop-blur-lg rounded-xl bg-gradient-to-tr text-black/60 from-white/35 via-white/60 to-white/35"
          >
            Verify OTP
          </button>
        </div>
        <button
          onClick={handleResend}
          className="w-full text-blue-600 p-2 text-sm cursor-pointer"
          disabled={otp.some((digit) => !digit)}
        >
          {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
