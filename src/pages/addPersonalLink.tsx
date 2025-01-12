import React from "react";
import axios from "axios";
import { backendUrl } from "../config/url";
import { toast } from "react-toastify";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

interface AddLinkFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function AddLinkForm({ onSuccess }: AddLinkFormProps) {
  const [form, setForm] = React.useState({
    title: "",
    description: "",
    link: "",
  });
  const nav = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${backendUrl}/api/v1/personal/link`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Link added successfully");
      nav("/personal");
      onSuccess?.();
    } catch (error) {
      toast.error("Failed to add link");
    }
  };

  return (
    <div>
      <div className="bg-gray-700/40 backdrop-blur-sm p-10 my-36 rounded-xl ">
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label className=" block text-lg font-medium text-gray-800 mb-1">
              Title
            </label>
            <Input
              required
              value={form.title}
              onChange={(e: any) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>

          <div>
            <label className=" block text-lg font-medium text-gray-800 mb-1">
              Description
            </label>
            <Input
              required
              value={form.description}
              onChange={(e: any) =>
                setForm((prev) => ({ ...prev, description: e.target.value }))
              }
            />
          </div>

          <div>
            <label className=" block text-lg font-medium text-gray-800 mb-1">
              Link URL
            </label>
            <Input
              required
              type="url"
              value={form.link}
              onChange={(e: any) =>
                setForm((prev) => ({ ...prev, link: e.target.value }))
              }
            />
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                nav("/personal");
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Add Link</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
