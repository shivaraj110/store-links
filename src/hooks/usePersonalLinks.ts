import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../config/url";

interface Link {
  id: number;
  userId: number;
  link: string;
  title: string;
  desc: string;
  postedOn: Date;
}

export function useLinks() {
  const [loading, setLoading] = useState(true);
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/v1/personal/links`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setLinks(response.data.links);
      } catch (error) {
        console.error("Failed to fetch links:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  return { loading, links };
}