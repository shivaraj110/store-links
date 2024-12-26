import { Camera, LogOut, UserCircle2 } from "lucide-react";
import { Button } from "./ui/Button";
import { formatDistanceToNow } from "date-fns";

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
        <LogOut className="text-red-700 size-10 cursor-pointer hover:text-red-900 delay-75 transi" />
      </div>
    </div>
  );
}
