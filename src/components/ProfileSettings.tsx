import React from "react";
import { Input } from "./ui/Input";
import { Button, DeleteButton } from "./ui/Button";
import axios from "axios";
import { backendUrl } from "../config/url";
import { toast } from "react-toastify";

type ProfileSettingsProps = {
  username: string;
  email: string;
  onSave: (data: { username: string; email: string }) => Promise<void>;
};

export function ProfileSettings({
  username,
  email,
  onSave,
}: ProfileSettingsProps) {
  const [form, setForm] = React.useState({ username, email });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 ">
      <div>
        <label
          htmlFor="username"
          className="block text-md font-medium text-gray-600 mb-1.5"
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
          className="block text-md font-medium text-gray-600 mb-1.5"
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
      </Button>
      <DeleteButton className="w-full">Delete Account</DeleteButton>
    </form>
  );
}

// Handle save settings function
export const handleSaveSettings = async (data: {
  username: string;
  email: string;
}) => {
  try {
    const [firstName, lastName] = data.username.split(" ");

    const response = await axios.put(
      `${backendUrl}/api/v1/profile/edit`,
      {
        email: data.email,
        fname: firstName,
        lname: lastName || "",
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    toast(response.data.msg, {
      type: response.status === 200 ? "success" : "error",
    });

    return response;
  } catch (error) {
    toast.error("Failed to update profile");
    throw error;
  }
};
