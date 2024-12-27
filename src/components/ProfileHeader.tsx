import { Camera, LogOut, UserCircle2 } from "lucide-react";
import { Button } from "./ui/Button";
import { formatDistanceToNow } from "date-fns";
import { backendUrl } from "../config/url";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

type ProfileHeaderProps = {
  username: string;
  joinedOn: string;
  onAvatarChange: () => void;
};

export function ProfileHeader({
  username,
  onAvatarChange,
  joinedOn,
}: ProfileHeaderProps) {
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
    <div className="flex justify-between items-center bg-gray-700/40 p-10 rounded-lg gap-6">
      <div className="relative group">
        <UserCircle2 className="size-24" />
        <Button
          variant="secondary"
          size="sm"
          className="absolute bottom-0 right-0 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={onAvatarChange}
        >
          <Camera className="w-4 h-4" />
        </Button>
      </div>
      <div className="text-gray-900">
        <h2 className="text-2xl font-bold ">{username}</h2>
        <p className="text-sm  mt-1">
          Member since {formatDistanceToNow(new Date(joinedOn))}
        </p>
      </div>
      <div>
        <LogOut
          onClick={onLogout}
          className="text-red-700 size-10 cursor-pointer hover:text-red-900 delay-75 transi"
        />
      </div>
    </div>
  );
}
