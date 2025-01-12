import { useState } from "react";
import { LinkCard } from "../components/LinkCard";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/ui/Button";
import { Link } from "../types";
import { useLinks } from "../hooks/usePersonalLinks";
import { Link as Linkk } from "react-router-dom";
import LinkCardSkeleton from "../components/LinkSkeleton";
import NoLinksYet from "../components/Nolinks";
import { PlusCircle } from "lucide-react";

export default function PersonalLinks() {
  const [search, setSearch] = useState("");
  const { loading, links } = useLinks();

  const filteredLinks = links.filter(
    (link: Link) =>
      link.title.toLowerCase().includes(search.toLowerCase()) ||
      link.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Linkk to={"/addPersonalLink"}></Linkk>
      </div>
      <div className="flex items-center justify-between">
        <SearchBar value={search} onChange={setSearch} />
        <Linkk to={"/addPersonalLink"}>
          <Button size="sm" className=" ">
            <PlusCircle />
          </Button>
        </Linkk>
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
        ) : filteredLinks[0] ? (
          filteredLinks.map((link: Link) => (
            <LinkCard key={link.id} link={link} />
          ))
        ) : (
          <NoLinksYet />
        )}
      </div>
    </div>
  );
}
