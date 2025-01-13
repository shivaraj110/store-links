import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/ui/Button";
import { useSoftwareLinks } from "../hooks/usePersonalLinks";
import { Link } from "react-router-dom";
import LinkCardSkeleton from "../components/LinkSkeleton";
import { softwareLink } from "../types";
import { SoftwareCard } from "../components/softwareCard";
import { PlusCircle } from "lucide-react";

export default function Softwares() {
  const [search, setSearch] = useState("");
  const { loading, links } = useSoftwareLinks();
  const filteredLinks = links.filter(
    (link: softwareLink) =>
      link.title.toLowerCase().includes(search.toLowerCase()) ||
      link.desc.toLowerCase().includes(search.toLowerCase()) ||
      link.category.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="space-y-4 mt-10">
      <div className="flex items-center justify-between">
        <SearchBar value={search} onChange={setSearch} />
        <Link to={"/addSoftware"}>
          <Button size="sm" className=" ">
            <PlusCircle />
          </Button>{" "}
        </Link>
      </div>
      <div className="space-y-3 ">
        {loading ? (
          <div>
            <LinkCardSkeleton />
            <br />
            <LinkCardSkeleton />
            <br />
            <LinkCardSkeleton />
            <br />
            <LinkCardSkeleton />
          </div>
        ) : (
          <div>
            {filteredLinks.map((link) => (
              <SoftwareCard
                version={link.version}
                category={link.category}
                id={link.id}
                title={link.title}
                desc={link.desc}
                link={link.link}
                user={link.user}
                views={link.views}
                postedOn={link.postedOn}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
