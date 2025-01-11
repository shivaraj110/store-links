import { useState } from "react";
import { SearchBar } from "../components/SearchBar";
import { Button } from "../components/ui/Button";
import { Navigation } from "../components/Navigation";
import { useJobLinks, useScholarshipLinks } from "../hooks/usePersonalLinks";
import { Link as Linkk, useParams } from "react-router-dom";
import LinkCardSkeleton from "../components/LinkSkeleton";
import { PublicLinkCard } from "../components/PublicLinkCard";

export default function PersonalLinks() {
  const params = useParams();
  const category = params["category"];
  const [search, setSearch] = useState("");
  const { loading, links } =
    category === "scholarships" ? useScholarshipLinks() : useJobLinks();
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
            {links.map((plink) => (
              <PublicLinkCard
                link={{
                  id: plink.id,
                  title: plink.title,
                  desc: plink.desc,
                  link: plink.link,
                  postedOn: plink.postedOn,
                  category: "scholarships",
                  additionalData: plink.org,
                  visitCount: plink.views,
                  postedBy: "Shivaraj",
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
