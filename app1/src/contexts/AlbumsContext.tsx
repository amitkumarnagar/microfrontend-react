import React from "react";
import type { Photo } from "../utils/types";

export type AlbumsContextType = {
  photos: Photo[];
  setPhotos: React.Dispatch<React.SetStateAction<Photo[]>>;
  favorites: Photo[];
  setFavorites: React.Dispatch<React.SetStateAction<Photo[]>>;
};

export const AlbumsContext = React.createContext<AlbumsContextType>({
  photos: [],
  setPhotos: () => {},
  favorites: [],
  setFavorites: () => {},
});

const AlbumsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photos, setPhotos] = React.useState<Photo[]>([]);
  const [favorites, setFavorites] = React.useState<Photo[]>([]);

  return (
    <AlbumsContext.Provider value={{ photos, setPhotos, favorites, setFavorites }}>{children}</AlbumsContext.Provider>
  );
};

export default AlbumsProvider;
