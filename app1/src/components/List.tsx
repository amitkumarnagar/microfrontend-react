import React from "react";
import type { Photo } from "../utils/types";

type ListProps = {
  photos: Photo[];
  toggleFavorite?: (photoId: number) => void;
};

const List: React.FC<ListProps> = ({ photos, toggleFavorite }) => {
  return (
    <div className="items">
      {photos.map((photo) => (
        <div key={photo.id} className="photo-item">
          <img src={photo.url} alt={photo.title} width={320} />
          {/* <img src="https://images.unsplash.com/photo-1736444865981-1f01548f5af8" alt={photo.title} width={320} /> */}
            <p className="title">{photo.title}</p>
          {!!toggleFavorite && (
            <button onClick={() => toggleFavorite?.(photo.id)}>
              {photo.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default List;
