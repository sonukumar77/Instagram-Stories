import { UserProfile } from "@/models/StoriesModel";
import { useEffect, useRef, useState } from "react";

const useStories = () => {
  const [stories, setStories] = useState<UserProfile[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/stories?page=${page}&limit=5`);
      const data = await response.json();
      setStories((prev) => [...prev, ...data.data]);
      setHasMore(data.hasMore);
    } catch (err) {
      console.error("Error in fetching data ", err);
      //TODO : can be show here error modal
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setPage((prev) => prev + 1);
      }
    });

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [hasMore]);

  return { stories, loaderRef, hasMore };
};

export default useStories;
