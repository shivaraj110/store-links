import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/ui/Button";
import { useHackathonLinks } from "../hooks/usePersonalLinks";
import { Link } from "react-router-dom";
import LinkCardSkeleton from "../components/LinkSkeleton";
import { hackathonLink } from "../types";
import { HackathonCard } from "../components/HackathonCard";
import { PlusCircle } from "lucide-react";

export default function Hackathons() {
  const [search, setSearch] = useState("");
  const { loading, links } = useHackathonLinks();
  const filteredLinks = links.filter(
    (link: hackathonLink) =>
      link.title.toLowerCase().includes(search.toLowerCase()) ||
      link.desc.toLowerCase().includes(search.toLowerCase()) ||
      link.domain.toLowerCase().includes(search.toLowerCase()) ||
      link.location.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="space-y-4 mt-10">
      <div className="flex items-center justify-between">
        <SearchBar value={search} onChange={setSearch} />
        <Link to={"/addHackathon"}>
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
          <div className="">
            {filteredLinks.map((link) => (
              <HackathonCard
                prizepool={link.prizepool}
                id={link.id}
                title={link.title}
                desc={link.desc}
                link={link.link}
                user={link.user}
                views={link.views}
                postedOn={link.postedOn}
                domain={link.domain}
                location={link.location}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
