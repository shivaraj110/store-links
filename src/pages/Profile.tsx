import { ToastContainer } from "react-toastify";
import { ProfileHeader } from "../components/ProfileHeader";
import {
  ProfileSettings,
  handleSaveSettings,
} from "../components/ProfileSettings";
import ProfileSkeleton from "../components/ProfileSkeleton";
import { useProfile } from "../hooks/useProfile";

export default function Profile() {
  const { loading, details } = useProfile();

  const handleAvatarChange = () => {
    // Handle avatar change
  };

  if (loading) {
    return <ProfileSkeleton />;
  }

  return (
    <div className="space-y-5 bg-gradient-to-r mt-10 from-blue-200 to-violet-400 backdrop-blur-sm rounded-xl p-5">
      <ToastContainer />
      <ProfileHeader
        joinedOn={details?.joinedOn ?? ""}
        username={details?.fname + " " + details?.lname}
        onAvatarChange={handleAvatarChange}
      />

      <div className=" rounded-xl shadow-sm border bg-gradient-to-r from-white/30 via-white/65 to-white/30 backdrop-blur-md border-slate-300 p-5">
        <h3 className="text-lg font-semibold text-gray-600 mb-6">
          Profile Settings
        </h3>
        <ProfileSettings
          username={details?.fname + " " + details?.lname}
          email={details?.email ?? ""}
          // @ts-ignore
          onSave={handleSaveSettings}
        />
      </div>
    </div>
  );
}
