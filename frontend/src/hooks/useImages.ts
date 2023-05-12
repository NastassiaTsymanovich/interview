import { useEffect, useState } from "react";
import { IImage } from "../interfaces/image";
import { getImages } from "../services/imagesApi";

export const useImages = (): IImage[] => {
  const [images, setImages] = useState<IImage[]>([]);

  useEffect(() => {
    getImages().then(response => {
      const data = response.data;
      setImages(data);
    });
  }, []);

  return images;
}