import clsx from "clsx";
import { Link2, LogOut, UserCircle2 } from "lucide-react";
import { ReactNode } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { backendUrl } from "../config/url";
import axios from "axios";
import { toast } from "react-toastify";

export default function Layout({ children }: { children: ReactNode }) {
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
    <div className="ml-6">
      <div className="flex justify-between ">
        <div className="flex gap-2">
          <Link2 className="text-violet-700 " />
          <Link to={"/"} className="font-semibold">
            StoreLinks
          </Link>
        </div>
        <div className="flex gap-5">
          <Link to={"/"}>
            <LogOut onClick={onLogout} />
          </Link>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              clsx(
                "text-sm mx-2 hover:text-violet-800 transi delay-75 ",
                isActive
                  ? "text-violet-800 underline py-1 border-b-violet-600 outline-none"
                  : "text-slate-700 after:bg-transparent hover:after:bg-slate-200"
              )
            }
          >
            <UserCircle2 />
          </NavLink>
        </div>
      </div>

      <div className="flex mt-6 justify-between">
        <div>
          <NavLink
            to="/public/scholarships"
            className={({ isActive }) =>
              clsx(
                "text-sm mx-2 mt-1  hover:text-violet-800 transi delay-75 ",
                isActive
                  ? "text-violet-800 py-1 border-b-violet-600 underline outline-none"
                  : "text-slate-700 after:bg-transparent hover:after:bg-slate-200"
              )
            }
          >
            Scholarships
          </NavLink>{" "}
          <NavLink
            to="/public/studymaterials"
            className={({ isActive }) =>
              clsx(
                "text-sm mx-2 mt-1  hover:text-violet-800 transi delay-75 ",
                isActive
                  ? "text-violet-800 underline py-1 border-b-violet-600 outline-none"
                  : "text-slate-700 after:bg-transparent hover:after:bg-slate-200"
              )
            }
          >
            Study Materials
          </NavLink>
          <NavLink
            to="/public/softwares"
            className={({ isActive }) =>
              clsx(
                "text-sm mx-2 mt-1  hover:text-violet-800 transi delay-75 ",
                isActive
                  ? "text-violet-800 underline py-1 border-b-violet-600 outline-none"
                  : "text-slate-700 after:bg-transparent hover:after:bg-slate-200"
              )
            }
          >
            Softwares
          </NavLink>
          <NavLink
            to="/public/jobs"
            className={({ isActive }) =>
              clsx(
                "text-sm mx-2 mt-1  hover:text-violet-800 transi delay-75 ",
                isActive
                  ? "text-violet-800 underline py-1 border-b-violet-600 outline-none"
                  : "text-slate-700 after:bg-transparent hover:after:bg-slate-200"
              )
            }
          >
            Jobs
          </NavLink>
          <NavLink
            to="/public/hackathons"
            className={({ isActive }) =>
              clsx(
                "text-sm mx-2 mt-1  hover:text-violet-800 transi delay-75 ",
                isActive
                  ? "text-violet-800 underline py-1 border-b-violet-600 outline-none"
                  : "text-slate-700 after:bg-transparent hover:after:bg-slate-200"
              )
            }
          >
            Hackathons
          </NavLink>
        </div>
        <NavLink
          to="/"
          className={({ isActive }) =>
            clsx(
              "text-sm mx-2 mt-1  hover:text-violet-800 transi delay-75 ",
              isActive
                ? "text-violet-800 underline py-1 border-b-violet-600 outline-none"
                : "text-slate-700 after:bg-transparent hover:after:bg-slate-200"
            )
          }
        >
          Personal Links
        </NavLink>
      </div>
      {children}
    </div>
  );
}
