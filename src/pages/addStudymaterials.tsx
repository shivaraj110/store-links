import { BookCopy, Info } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../config/url";
import axios from "axios";
import { toast } from "react-toastify";
interface AddLinkFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}
export default function AddStudyMaterial({ onSuccess }: AddLinkFormProps) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
    categories: "",
  });
  const nav = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        `${backendUrl}/api/v1/public/studymaterials/link`,
        {
          title: form.title,
          description: form.description,
          link: form.link,
          categories: form.categories.split(","),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success("Link added successfully");
      nav("/public/studymaterials");
      onSuccess?.();
    } catch (error) {
      toast.error("Failed to add link");
    }
  };
  return (
    <div className=" mt-10 items-center mx-auto">
      <form onSubmit={handleSubmit} className="flex pt-10 justify-center">
        <div className="bg-white text-gray-700 border mt-2 p-5 shadow-xl w-[600px] rounded-lg h-fit">
          <div className=" flex gap-2 w-fit justify-center text-blue-600 p-2 rounded-lg bg-blue-500/20 border">
            <Info className="size-5 " /> fill the below form to share study
            materials.
          </div>
          <div className="flex justify-between">
            <div className="mt-2">Enter Title</div>
            <div className="mt-2 mr-28">Categories</div>
          </div>
          <div className="flex justify-between">
            <input
              required
              value={form.title}
              onChange={(e: any) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              type="text"
              className="border-2 w-[300px] mt-2 p-2 outline-none border-gray-400 pl-2 rounded-xl"
            />{" "}
            <input
              placeholder="DSA,OOPS,Web"
              required
              value={form.categories}
              onChange={(e: any) =>
                setForm((prev) => ({
                  ...prev,
                  categories: e.target.value,
                }))
              }
              type="text"
              className="outline-none border-2 w-[200px] mt-2 p-2 border-gray-400 pl-2 rounded-xl"
            />
          </div>
          <div className="flex justify-between">
            <div>
              <div className="mt-2">Enter Description</div>
              <textarea
                required
                value={form.description}
                onChange={(e: any) =>
                  setForm((prev) => ({ ...prev, description: e.target.value }))
                }
                className="border-2 outline-none w-[300px] h-[200px] p-2 border-gray-400 rounded-xl"
                name="description"
              />
            </div>
            <div className="mr-12 mt-10 ">
              <BookCopy className=" text-violet-600 size-36" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="mt-2">Paste the link below</div>
              <input
                required
                type="url"
                value={form.link}
                onChange={(e: any) =>
                  setForm((prev) => ({ ...prev, link: e.target.value }))
                }
                className="border-2 w-[300px] outline-none mt-2 p-2 border-gray-400 pl-2 rounded-xl"
              />
            </div>
            <div className="ml-14 items-center mt-10  bg-gradient-to-tr w-full text-lg from-blue-600 text-gray-800 hover:-translate-y-1 transi to-violet-700 shadow-lg hover:shadow-xl rounded-xl border">
              <button
                type="submit"
                className="flex justify-center w-full p-1 border backdrop-blur-lg rounded-xl bg-gradient-to-tr text-black/65 from-white/35 via-white/60 to-white/35"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
