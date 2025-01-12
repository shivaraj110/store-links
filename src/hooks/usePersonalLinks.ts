import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../config/url";
import { hackathonLink, JobLink, ScholarshipsLink, softwareLink, studyLink } from "../types";

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


export function useScholarshipLinks(){
  const [loading,setLoading] = useState(true)
  const [links,setLinks] = useState<ScholarshipsLink[]>([])

    useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/v1/public/scholarships/links`, {
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
  return {loading,links}  
}


export function useJobLinks(){
  const [loading,setLoading] = useState(true)
  const [links,setLinks] = useState<JobLink[]>([])

    useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/v1/public/jobs/links`, {
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
  return {loading,links}
}

export function useStudyMaterialLinks(){
  const [loading,setLoading] = useState(true)
  const [links,setLinks] = useState<studyLink[]>([])

    useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/v1/public/studymaterials/links`, {
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
  return {loading,links}
}

export function useHackathonLinks(){
  const [loading,setLoading] = useState(true)
  const [links,setLinks] = useState<hackathonLink[]>([])

    useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/v1/public/hackathons/links`, {
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
  return {loading,links}
}

export function useSoftwareLinks(){
  const [loading,setLoading] = useState(true)
  const [links,setLinks] = useState<softwareLink []>([])

    useEffect(() => {
    const fetchLinks = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/v1/public/softwares/links`, {
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
  return {loading,links}
}
