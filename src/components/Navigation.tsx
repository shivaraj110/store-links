import { NavLink } from "react-router-dom";
import { BookMarked, Globe, User } from "lucide-react";
import { clsx } from "clsx";

export function Navigation() {
  return (
    <nav className=" px-2">
      <div className="flex h-14">
        <NavLink
          to="/personal"
          className={({ isActive }) =>
            clsx(
              "flex items-center gap-2 px-4 text-sm font-medium relative",
              "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:transition-all",
              isActive
                ? "text-blue-600 after:bg-blue-600"
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
              "flex items-center gap-2 px-4 text-sm font-medium relative",
              "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:transition-all",
              isActive
                ? "text-blue-600 after:bg-blue-600"
                : "text-slate-600 hover:text-slate-900 after:bg-transparent hover:after:bg-slate-200"
            )
          }
        >
          <Globe className="w-4 h-4" />
          Public Links
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            clsx(
              "flex items-center gap-2 px-4 text-sm font-medium relative ml-auto",
              "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:transition-all",
              isActive
                ? "text-blue-600 after:bg-blue-600"
                : "text-slate-600 hover:text-slate-900 after:bg-transparent hover:after:bg-slate-200"
            )
          }
        >
          <User className="w-4 h-4" />
          Profile
        </NavLink>
      </div>
    </nav>
  );
}
