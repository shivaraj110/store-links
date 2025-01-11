import { formatDistanceToNow } from "date-fns";
import { Link as LinkIcon, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { backendUrl } from "../config/url";

type CategoryDetails = {
  scholarships: { organization: string };
  studymaterial: { domain: string };
  freesoftware: { useCase: string };
  hackathons: { domain: string };
  jobs: { skills: string };
};

type PublicLink = {
  id: number;
  title: string;
  desc: string;
  link: string;
  postedOn: Date;
  postedBy: string;
  category: keyof CategoryDetails;
  additionalData: string;
  visitCount: number;
};

type LinkCardProps = {
  link: PublicLink;
};

const onDelete = (id: number) => {
  axios
    .delete(backendUrl + "/api/v1/public/links", {
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

export function PublicLinkCard({ link }: LinkCardProps) {
  const nav = useNavigate();

  const getCategoryInfo = () => {
    switch (link.category) {
      case "scholarships":
        return `Organization: ${link.additionalData}`;
      case "studymaterial":
        return `Domain: ${link.additionalData}`;
      case "freesoftware":
        return `Use Case: ${link.additionalData}`;
      case "hackathons":
        return `Domain: ${link.additionalData}`;
      case "jobs":
        return `Required Skills: ${link.additionalData}`;
      default:
        return link.additionalData;
    }
  };

  return (
    <div className="rounded-lg border border-blue-600 bg-gray-700/10 backdrop-blur-sm p-4 shadow-sm">
      <ToastContainer />
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-medium text-gray-900">{link.title}</h3>
          <div className="flex items-center gap-4">
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center text-sm text-blue-700 hover:underline"
            >
              <LinkIcon className="mr-1 h-4 w-4" />
              Visit Link
            </a>
            <span className="text-sm text-gray-600">
              Visits: {link.visitCount}
            </span>
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => {
              nav(
                `/edit-link?id=${link.id}&title=${link.title}&desc=${link.desc}&link=${link.link}&category=${link.category}&additionalData=${link.additionalData}`
              );
            }}
            className="text-blue-700 hover:text-blue-900"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(link.id)}
            className="text-red-700 hover:text-red-900"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="mt-2 space-y-2">
        <p className="text-sm text-gray-900">{link.desc}</p>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Category:</span>
          <span className="text-sm font-medium capitalize">
            {link.category}
          </span>
        </div>
        <div className="text-sm text-gray-600">{getCategoryInfo()}</div>
      </div>

      <div className="mt-4 flex items-center justify-between text-sm text-gray-800">
        <div className="flex space-x-2 items-center">
          <User className="size-6" />
          <span>{link.postedBy}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>{formatDistanceToNow(new Date(link.postedOn))} ago</span>
        </div>
      </div>
    </div>
  );
}
