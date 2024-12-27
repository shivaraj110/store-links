import { useState } from "react";
import { LinkCard } from "../components/LinkCard";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/ui/Button";
import { Link } from "../types";
import { Navigation } from "../components/Navigation";
import { useLinks } from "../hooks/usePersonalLinks";
import { Link as Linkk } from "react-router-dom";
import LinkCardSkeleton from "../components/LinkSkeleton";

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
      <Navigation />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">Personal Links</h1>
        <Linkk to={"/addPersonalLink"}>
          <Button size="sm">Add Link</Button>
        </Linkk>
      </div>

      <SearchBar value={search} onChange={setSearch} />

      <div className="space-y-3 mt-4">
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
          filteredLinks.map((link: Link) => (
            <LinkCard key={link.id} link={link} />
          ))
        )}
      </div>
    </div>
  );
}
