import clsx from "clsx";
import { Link2, LogOut, UserCircle2 } from "lucide-react";
import { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Layout({ children }: { children: ReactNode }) {
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
            <LogOut />
          </Link>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              clsx(
                "text-sm mx-2 hover:text-violet-800 transi delay-75 ",
                isActive
                  ? "text-violet-800 border py-1 border-b-violet-600"
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
                  ? "text-violet-800 border py-1 border-b-violet-600"
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
                  ? "text-violet-800 border py-1 border-b-violet-600"
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
                  ? "text-violet-800 border py-1 border-b-violet-600"
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
                  ? "text-violet-800 border py-1 border-b-violet-600"
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
                  ? "text-violet-800 border py-1 border-b-violet-600"
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
                ? "text-violet-800 border py-1 border-b-violet-600"
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
