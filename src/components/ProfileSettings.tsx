import React from "react";
import { Input } from "./ui/Input";
import { Button, DeleteButton } from "./ui/Button";

type ProfileSettingsProps = {
  username: string;
  email: string;
  onSave: (data: { username: string; email: string }) => void;
};

export function ProfileSettings({
  username,
  email,
  onSave,
}: ProfileSettingsProps) {
  const [form, setForm] = React.useState({ username, email });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Username
        </label>
        <Input
          id="username"
          value={form.username}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, username: e.target.value }))
          }
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-1.5"
        >
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
      </div>
      <Button type="submit" className="w-full">
        Save Changes
      </Button>{" "}
      <DeleteButton type="submit" className="w-full">
        Delete Account
      </DeleteButton>
    </form>
  );
}
