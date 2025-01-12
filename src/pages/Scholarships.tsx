import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/ui/Button";
import { useScholarshipLinks } from "../hooks/usePersonalLinks";
import { Link } from "react-router-dom";
import LinkCardSkeleton from "../components/LinkSkeleton";
import { ScholarshipCard } from "../components/ScholarshipLinkCard";
import { ScholarshipsLink } from "../types";
import { PlusCircle } from "lucide-react";

export default function Scholarships() {
  const [search, setSearch] = useState("");
  const { loading, links } = useScholarshipLinks();
  const filteredLinks = links.filter(
    (link: ScholarshipsLink) =>
      link.title.toLowerCase().includes(search.toLowerCase()) ||
      link.desc.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="space-y-4 mt-10">
      <div className="flex items-center justify-between">
        <SearchBar value={search} onChange={setSearch} />
        <Link to={"/addScholarship"}>
          <Button size="sm" className=" ">
            <PlusCircle />
          </Button>
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
              <ScholarshipCard
                id={link.id}
                title={link.title}
                desc={link.desc}
                link={link.link}
                org={link.org}
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
