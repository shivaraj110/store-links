import React from 'react';
import { ProfileHeader } from '../components/ProfileHeader';
import { ProfileSettings } from '../components/ProfileSettings';

const mockUser = {
  username: 'johndoe',
  email: 'john@example.com',
  avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=160&h=160&fit=crop&crop=faces',
};

export default function Profile() {
  const handleAvatarChange = () => {
    // Handle avatar change
  };

  const handleSaveSettings = (data: { username: string; email: string }) => {
    console.log('Saving settings:', data);
  };

  return (
    <div className="max-w-2xl space-y-8">
      <ProfileHeader
        username={mockUser.username}
        avatarUrl={mockUser.avatarUrl}
        onAvatarChange={handleAvatarChange}
      />
      
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-6">Profile Settings</h3>
        <ProfileSettings
          username={mockUser.username}
          email={mockUser.email}
          onSave={handleSaveSettings}
        />
      </div>
    </div>
  );
}