import React from 'react';
import { Camera } from 'lucide-react';
import { Button } from './ui/Button';

type ProfileHeaderProps = {
  username: string;
  avatarUrl: string;
  onAvatarChange: () => void;
};

export function ProfileHeader({ username, avatarUrl, onAvatarChange }: ProfileHeaderProps) {
  return (
    <div className="flex items-center gap-6">
      <div className="relative group">
        <img
          src={avatarUrl}
          alt={username}
          className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-md"
        />
        <Button
          variant="secondary"
          size="sm"
          className="absolute bottom-0 right-0 rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={onAvatarChange}
        >
          <Camera className="w-4 h-4" />
        </Button>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-slate-900">{username}</h2>
        <p className="text-sm text-slate-500 mt-1">Member since Jan 2024</p>
      </div>
    </div>
  );
}