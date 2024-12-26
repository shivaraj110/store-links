import { NavLink, useNavigate } from "react-router-dom";
import { BookMarked, Globe, LogOut, User } from "lucide-react";
import { clsx } from "clsx";
import axios from "axios";
import { backendUrl } from "../config/url";
import { toast, ToastContainer } from "react-toastify";

export function Navigation() {
  const nav = useNavigate();
  const onLogout = async () => {
    const res = await axios.put(
      backendUrl + "/api/v1/user/logout",
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    res.status == 200
      ? toast.success("logged out!")
      : toast.error("couldn't logout!");
    nav("/login");
  };

  return (
    <nav className=" px-2">
      <ToastContainer />
      <div className="flex h-14">
        <NavLink
          to="/personal"
          className={({ isActive }) =>
            clsx(
              "flex items-center  gap-2 px-4 text-md font-medium relative",
              "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:transition-all",
              isActive
                ? "text-gray-900 rounded-lg bg-gray-700/50"
                : "text-slate-600 hover:text-slate-900 after:bg-transparent hover:after:bg-slate-200"
            )
          }
        >
          <BookMarked className="w-4 h-4" />
          Personal Links
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(
              "flex items-center gap-2 px-4 text-lg font-medium relative",
              "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:transition-all",
              isActive
                ? "text-gray-900 rounded-lg bg-gray-700/50"
                : "text-slate-600 after:bg-transparent hover:after:bg-slate-200"
            )
          }
        >
          <Globe className="w-4 h-4" />
          Public Links
        </NavLink>

        <div
          className={clsx(
            "flex items-center gap-2 px-4 text-lg font-medium relative ml-auto",
            "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:transition-all"
          )}
        >
          <LogOut
            className="cursor-pointer  text-gray-600"
            onClick={onLogout}
          />
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              clsx(
                "flex items-center gap-2 px-4 text-lg font-medium relative p-5 ml-auto",

                isActive
                  ? "text-gray-900 rounded-lg bg-gray-700/50"
                  : "text-slate-600 hover:text-slate-900 after:bg-transparent hover:after:bg-slate-200"
              )
            }
          >
            <User className="w-4 h-4" />
            Profile
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
