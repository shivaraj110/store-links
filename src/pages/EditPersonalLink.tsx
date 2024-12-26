import React from "react";
import axios from "axios";
import { backendUrl } from "../config/url";
import { toast, ToastContainer } from "react-toastify";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Navigation } from "../components/Navigation";
import { useNavigate, useSearchParams } from "react-router-dom";

interface AddLinkFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}

export default function EditLinkForm({ onSuccess }: AddLinkFormProps) {
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));
  const title = searchParams.get("title");
  const link = searchParams.get("link");
  const description = searchParams.get("desc");

  const [form, setForm] = React.useState({
    id,
    title,
    description,
    link,
  });
  const nav = useNavigate();

  searchParams.get("__firebase_request_key");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`${backendUrl}/api/v1/personal/link`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Link added updated!");
      onSuccess?.();
      nav("/personal");
    } catch (error) {
      toast.error("Failed to add link");
    }
  };

  return (
    <div>
      <ToastContainer />
      <Navigation />
      <form onSubmit={handleSubmit} className="space-y-4 my-44">
        <div>
          <label className=" block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <Input
            required
            value={form.title ?? ""}
            onChange={(e: any) =>
              setForm((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>

        <div>
          <label className=" block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <Input
            required
            value={form.description ?? ""}
            onChange={(e: any) =>
              setForm((prev) => ({ ...prev, description: e.target.value }))
            }
          />
        </div>

        <div>
          <label className=" block text-sm font-medium text-gray-700 mb-1">
            Link URL
          </label>
          <Input
            required
            type="url"
            value={form.link ?? ""}
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
          <Button type="submit">Save Link</Button>
        </div>
      </form>
    </div>
  );
}
