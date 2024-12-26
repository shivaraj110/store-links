import { ProfileHeader } from "../components/ProfileHeader";
import { ProfileSettings } from "../components/ProfileSettings";
import ProfileSkeleton from "../components/ProfileSkeleton";
import { useProfile } from "../hooks/useProfile";

const mockUser = {
  username: "johndoe",
  email: "john@example.com",
  avatarUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcazeHuAcZDzv4_61fPLT-S00XnaKXch2YWQ&s",
};

export default function Profile() {
  const { loading, details } = useProfile();
  const handleAvatarChange = () => {
    // Handle avatar change
  };

  const handleSaveSettings = (data: { username: string; email: string }) => {
    console.log("Saving settings:", data);
  };

  if (loading) {
    return <ProfileSkeleton />;
  } else
    return (
      <div className="max-w-2xl space-y-8">
        <ProfileHeader
          joinedOn={details?.joinedOn ?? ""}
          username={details?.fname + " " + details?.lname}
          avatarUrl={mockUser.avatarUrl}
          onAvatarChange={handleAvatarChange}
        />

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-6">
            Profile Settings
          </h3>
          <ProfileSettings
            username={details?.fname + " " + details?.lname}
            email={details?.email ?? ""}
            onSave={handleSaveSettings}
          />
        </div>
      </div>
    );
}
