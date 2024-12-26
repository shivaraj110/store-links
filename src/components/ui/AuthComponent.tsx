import { useState, FormEvent } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import axios from "axios";
import OTPVerification from "../OTP";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../../config/url";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fname: "",
    lname: "",
  });

  const resendOtp = async () => {
    const res = await axios.post(
      `${backendUrl}/api/v1/user/${isLogin ? "signin" : "signup"}/resendotp`,
      {
        email: formData.email,
      }
    );
    res.status == 200
      ? toast.success(res.data.msg)
      : toast.error("something wrong with sending a new otp");
  };

  const handleOtpVerification = async (otp: string) => {
    await axios
      .post(
        `${backendUrl}/api/v1/user/${isLogin ? "signin" : "signup"}/verify`,
        {
          email: formData.email,
          password: formData.password,
          otp: Number(otp),
          fname: formData.fname,
          lname: formData.lname,
        }
      )
      .then((res) => {
        if (res.data.token) {
          toast.success(res.data.msg);
          localStorage.setItem("token", res.data.token);
          nav("/");
        }
      })
      .catch((err) => toast.error(err));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    const res = await axios.post(
      `${backendUrl}/api/v1/user/${isLogin ? "signin" : "signup"}`,
      {
        email: formData.email,
        password: formData.password,
        fname: formData.fname,
        lname: formData.lname,
      }
    );
    res.status !== 200
      ? toast.error(res.data.msg)
      : toast.success(res.data.msg);
  };

  return (
    <div>
      {loading ? (
        <div>
          <ToastContainer />

          <OTPVerification
            onResend={resendOtp}
            email={formData.email}
            onVerify={handleOtpVerification}
          />
        </div>
      ) : (
        <div className="w-80 p-4 mx-auto my-52 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <ToastContainer />
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.fname}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      fname: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lname}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      lname: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}

            <div className="relative">
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-500" />
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 flex items-center justify-center"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "send OTP"
              )}
            </button>
          </form>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700"
          >
            {isLogin
              ? "Need an account? Sign up"
              : "Already have an account? Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
