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
    <div className="max-w-2xl space-y-8">
      <ToastContainer />
      <Navigation />
      <ProfileHeader
        joinedOn={details?.joinedOn ?? ""}
        username={details?.fname + " " + details?.lname}
        avatarUrl={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcazeHuAcZDzv4_61fPLT-S00XnaKXch2YWQ&s"
        }
        onAvatarChange={handleAvatarChange}
      />

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
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
