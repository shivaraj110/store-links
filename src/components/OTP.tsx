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
              className="w-12 h-12 text-center text-xl border bg-white/30 backdrop-blur-sm rounded focus:outline-none focus:border-blue-500"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          className="w-full bg-blue-600 text-white rounded p-2 hover:bg-blue-700 mb-4"
          disabled={otp.some((digit) => !digit)}
        >
          Verify OTP
        </button>

        <button
          onClick={handleResend}
          disabled={timer > 0}
          className="w-full text-blue-600 p-2 text-sm"
        >
          {timer > 0 ? `Resend OTP in ${timer}s` : "Resend OTP"}
        </button>
      </div>
    </div>
  );
};

export default OTPVerification;
