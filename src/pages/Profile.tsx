import { ToastContainer } from "react-toastify";
import { ProfileHeader } from "../components/ProfileHeader";
import {
  ProfileSettings,
  handleSaveSettings,
} from "../components/ProfileSettings";
import ProfileSkeleton from "../components/ProfileSkeleton";
import { useProfile } from "../hooks/useProfile";
import { Navigation } from "../components/Navigation";

export default function Profile() {
  const { loading, details } = useProfile();

  const handleAvatarChange = () => {
    // Handle avatar change
  };

  if (loading) {
    return <ProfileSkeleton />;
  }

  return (
    <div className="space-y-5">
      <ToastContainer />
      <Navigation />
      <ProfileHeader
        joinedOn={details?.joinedOn ?? ""}
        username={details?.fname + " " + details?.lname}
        onAvatarChange={handleAvatarChange}
      />

      <div className="bg-gray-700/30 backdrop-blur-sm rounded-xl shadow-sm border border-slate-300 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">
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
