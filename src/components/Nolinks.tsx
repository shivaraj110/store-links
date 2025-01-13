import { Link2Off, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const NoLinksYet = () => {
  return (
    <div className="w-full my-48 max-w-md mx-auto bg-gradient-to-tr from-violet-400 to-blue-400 rounded-lg shadow-xl border">
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 px-4">
        <div className="flex gap-2">
          <div className="rounded-full shadow-md bg-white/35 backdrop-blur-sm border p-4">
            <Link2Off className="h-8 w-8 text-violet-600" />
          </div>
          <div className="rounded-full shadow-md hover:shadow-xl transi delay-75 bg-white/35 backdrop-blur-sm border p-4">
            <Link to={"/addPersonalLink"}>
              {" "}
              <Plus className=" h-8 w-8 text-violet-600" />
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg text-gray-700 font-semibold">No links yet</h3>
          <p className="text-md text-gray-700">
            When you add links, they'll show up here. Get started by adding your
            first link.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoLinksYet;
