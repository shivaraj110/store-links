import { formatDistanceToNow } from "date-fns";
import { Link as LinkIcon, User } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../config/url";
import { hackathonLink } from "../types";
import { useProfile } from "../hooks/useProfile";

const onDelete = (id: number) => {
  axios
    .delete(backendUrl + "/api/v1/public/hackathons/link", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: { id },
    })
    .then((res) => {
      toast.success(res.data.msg);
      window.location.reload();
    });
};

const onVisit = (id: number) => {
  axios
    .put(
      backendUrl + "/api/v1/public/hackathons/view",
      {
        id,
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    )
    .then((res) => {
      toast.success(res.data.msg);
      window.location.reload();
    });
};

export function HackathonCard(link: hackathonLink) {
  const { details } = useProfile();
  return (
    <div className="rounded-lg border my-3 bg-gradient-to-r from-blue-300 to-violet-400 p-2 hover:shadow-2xl cursor-pointer hover:-translate-y-1 transi shadow-xl">
      <div className="bg-gradient-to-tr from-white/25 via-white/65 to-white/25 backdrop-blur-lg shadow-lg rounded-lg border p-3">
        <ToastContainer />
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{link.title}</h3>
            <div className="flex items-center gap-4">
              <a
                onClick={() => {
                  onVisit(link.id);
                }}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 flex items-center text-sm text-blue-700 hover:underline"
              >
                <LinkIcon className="mr-1 h-4 w-4" />
                Visit Link
              </a>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              disabled={link.user.id !== details?.id}
              onClick={() => onDelete(link.id)}
              className="text-red-700 hover:text-red-900 disabled:hover:cursor-not-allowed"
            >
              Delete
            </button>
          </div>
        </div>

        <div className="mt-2 space-y-2">
          <p className="text-sm text-gray-900">{link.desc}</p>
          <div className="flex items-center justify-between gap-2">
            <div className="space-x-2">
              <span className="text-sm text-gray-600">
                location: {link.location}
              </span>
              <span className="text-sm text-gray-600">
                Domain: {link.domain}
              </span>
            </div>
            <span className="text-sm  text-gray-700">
              Prize: INR {link.prizepool}
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-800">
          <div className="flex space-x-2 items-center">
            <User className="size-6" />
            <span>{link.user.fname}</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">{link.views} visits</span>

            <span>{formatDistanceToNow(new Date(link.postedOn))} ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
