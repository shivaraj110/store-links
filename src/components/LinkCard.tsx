import { formatDistanceToNow } from "date-fns";
import { Link as LinkIcon, User } from "lucide-react";
import { Link } from "../types";
import { useProfile } from "../hooks/useProfile";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../config/url";

type LinkCardProps = {
  link: Link;
};

const onDelete = (id: number) => {
  axios
    .delete(backendUrl + "/api/v1/personal/link", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: {
        id,
      },
    })
    .then((res) => {
      toast.success(res.data.msg);
      window.location.reload();
    });
};

export function LinkCard({ link }: LinkCardProps) {
  const nav = useNavigate();
  const { details } = useProfile();
  return (
    <div className="rounded-lg border border-blue-600 bg-gray-700/10  backdrop-blur-sm p-4 shadow-sm">
      <ToastContainer />

      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{link.title}</h3>
          <a
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 flex items-center text-sm text-blue-700 hover:underline"
          >
            <LinkIcon className="mr-1 h-4 w-4" />
            Visit Link
          </a>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => {
              nav(
                `/edit-personal?id=${link.id}&title=${link.title}&desc=${link.desc}&link=${link.link}`
              );
            }}
            className="text-blue-700 hover:text-blue-900"
          >
            Edit
          </button>

          <button
            onClick={() => {
              onDelete(link.id);
            }}
            className="text-red-700 hover:text-red-900"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-900">{link.desc}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-800">
        <div className="flex space-x-2  items-center">
          <User className="size-6" />
          <span>{details?.fname}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>{formatDistanceToNow(new Date(link.postedOn))} ago</span>
        </div>
      </div>
    </div>
  );
}
