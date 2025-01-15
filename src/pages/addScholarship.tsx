import { GraduationCap, Info } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../config/url";
import axios from "axios";
import { toast } from "react-toastify";
interface AddLinkFormProps {
  onSuccess?: () => void;
  onCancel?: () => void;
}
export default function AddScholarShip({ onSuccess }: AddLinkFormProps) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
    org: "",
  });
  const nav = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post(`${backendUrl}/api/v1/public/scholarships/link`, form, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      toast.success("Link added successfully");
      nav("/public/scholarships");
      onSuccess?.();
    } catch (error) {
      toast.error("Failed to add link");
    }
  };
  return (
    <div className=" mt-10 items-center mx-auto">
      <form onSubmit={handleSubmit} className="  flex pt-10 justify-center">
        <div className="bg-white text-gray-700 border mt-2 p-5 shadow-xl w-[600px] rounded-lg h-fit">
          <div className=" flex gap-2 w-fit justify-center text-blue-600 p-2 rounded-lg bg-blue-500/20 border">
            <Info className="size-5 " /> fill the below form to share
            scholarship details.
          </div>
          <div className="flex justify-between">
            <div className="mt-2">Enter Title</div>
            <div className="mt-2 mr-24">Organization</div>
          </div>
          <div className="flex justify-between">
            <input
              placeholder="SSP"
              required
              value={form.title}
              onChange={(e: any) =>
                setForm((prev) => ({ ...prev, title: e.target.value }))
              }
              type="text"
              className="w-[300px] placeholder:text-gray-500 mt-2 p-2 outline-none bg-white/40 border backdrop-blur-sm pl-2 rounded-xl"
            />{" "}
            <input
              required
              value={form.org}
              onChange={(e: any) =>
                setForm((prev) => ({ ...prev, org: e.target.value }))
              }
              type="text"
              placeholder="Karnataka State Govt"
              className="outline-none w-[200px] placeholder:text-gray-500 mt-2 p-2 bg-white/40 border backdrop-blur-sm pl-2 rounded-xl"
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
                className="bg-white/40 border backdrop-blur-sm outline-none w-[300px] h-[200px] p-2  rounded-xl"
                name="description"
              />
            </div>
            <div className="mr-12 mt-10 ">
              <GraduationCap className=" text-violet-600 size-36" />
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
                className="bg-white/40 border backdrop-blur-sm w-[300px] outline-none mt-2 p-2 pl-2 rounded-xl"
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
