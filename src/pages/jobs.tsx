import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/ui/Button";
import { useJobLinks } from "../hooks/usePersonalLinks";
import { Link } from "react-router-dom";
import LinkCardSkeleton from "../components/LinkSkeleton";
import { JobLink } from "../types";
import { JobCard } from "../components/JobCard";
import { PlusCircle } from "lucide-react";

export default function Jobs() {
  const [search, setSearch] = useState("");
  const { loading, links } = useJobLinks();
  const filteredLinks = links.filter(
    (link: JobLink) =>
      link.title.toLowerCase().includes(search.toLowerCase()) ||
      link.desc.toLowerCase().includes(search.toLowerCase()) ||
      link.role.toLowerCase().includes(search.toLowerCase()) ||
      link.skills.some((skill) =>
        skill.toLowerCase().includes(search.toLowerCase())
      )
  );
  return (
    <div className="space-y-4 mt-10">
      <div className="flex items-center justify-between">
        <SearchBar value={search} onChange={setSearch} />
        <Link to={"/addJob"}>
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
              <JobCard
                id={link.id}
                role={link.role}
                skills={link.skills}
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
