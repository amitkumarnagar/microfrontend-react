import { useContext, useEffect, useState } from "react";
import { AlbumsContext } from "../contexts/AlbumsContext";
import type { Photo } from "../utils/types";

const useAlbums = (initialPage = 1) => {
  const { photos, setPhotos } = useContext(AlbumsContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(initialPage);
  const [error, setError] = useState<string | undefined>();

  const isPageAlreadyFetched = () => photos.length >= page * 10;

  const transformResponse = (data: Photo[]) => data.map((photo) => ({ ...photo, isFavorite: false }));

  const fetchPhotos = async () => {
    if (isPageAlreadyFetched() || loading) return;
    try {
      setLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?_page=${page}&_limit=10`);
      const data = await response.json();
      setPhotos((prevPhotos) => [...prevPhotos, ...transformResponse(data)]);
      setError(undefined);
    } catch {
      console.error("Error fetching data");
      setError(error?.toString());
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (id: number) => {
    setPhotos((prevPhotos) =>
      prevPhotos.map((photo) => (photo.id === id ? { ...photo, isFavorite: !photo.isFavorite } : photo))
    );
  };

  const getFavorites = () => photos.filter((photo) => photo.isFavorite);

  useEffect(() => {
    fetchPhotos();
  }, [page]);

  return {
    photos,
    loading,
    error,
    fetch: fetchPhotos,
    onChangePage: setPage,
    toggleFavorite,
    getFavorites,
  };
};

export default useAlbums;
