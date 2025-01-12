import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/ui/Button";
import { useStudyMaterialLinks } from "../hooks/usePersonalLinks";
import { Link } from "react-router-dom";
import LinkCardSkeleton from "../components/LinkSkeleton";
import { studyLink } from "../types";
import { StudymaterialCard } from "../components/studymaterialCard";

export default function Studymaterials() {
  const [search, setSearch] = useState("");
  const { loading, links } = useStudyMaterialLinks();
  const filteredLinks = links.filter(
    (link: studyLink) =>
      link.title.toLowerCase().includes(search.toLowerCase()) ||
      link.desc.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="space-y-4 mt-10">
      <div className="flex items-center justify-between">
        <SearchBar value={search} onChange={setSearch} />
        <Link to={"/addScholarShip"}>
          <Button size="sm">Add Link</Button>
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
              <StudymaterialCard
                id={link.id}
                title={link.title}
                desc={link.desc}
                link={link.link}
                user={link.user}
                categories={link.categories}
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
