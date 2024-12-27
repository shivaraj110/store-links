import { Link2Off, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const NoLinksYet = () => {
  return (
    <div className="w-full my-48 max-w-md mx-auto bg-gray-700/40 rounded-lg shadow-sm border border-gray-900">
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 px-4">
        <div className="flex gap-2">
          <div className="rounded-full bg-gray-700 p-4">
            <Link2Off className="h-8 w-8 text-gray-400" />
          </div>
          <div className="rounded-full bg-gray-700 p-4">
            <Link to={"/addPersonalLink"}>
              {" "}
              <Plus className=" h-8 w-8 text-gray-400" />
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-900">No links yet</h3>
          <p className="text-sm text-gray-700">
            When you add links, they'll show up here. Get started by adding your
            first link.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoLinksYet;
