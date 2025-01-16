import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import List from "../components/List";
import useAlbums from "../hooks/useAlbums";

const Albums: React.FC = () => {
  const navigate = useNavigate();
  const { photos, loading, error, onChangePage, toggleFavorite } = useAlbums();
  const observer = useRef<IntersectionObserver | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting && !loading) {
        onChangePage((prev) => prev + 1);
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      threshold: 1,
    });

    if (triggerRef.current) {
      observer.current.observe(triggerRef.current);
    }

    return () => {
      if (observer.current && triggerRef.current) {
        observer.current.unobserve(triggerRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photos, loading]);

  return (
    <div className="albums">
      <h2>List of Photos</h2>
      <button onClick={() => navigate("/app1")}>Back to Dashboard</button>
      <div className="list">
        <List photos={photos} toggleFavorite={toggleFavorite} />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div ref={triggerRef} />
    </div>
  );
};

export default Albums;
