import React, { useState } from "react";
import Carousel from "../../components/common/Carousel";
import Gallery from "../../components/common/Gallery";
import Toggle from "../../components/common/Toggle";
import { useImages } from "../../hooks/useImages";

const GalleryPage = () => {
  const [isCarousel, setIsCarousel] = useState<boolean>(false);
  const images = useImages();

  const changeLayout = () => setIsCarousel((value) => !value);

  return (
    <div>
      <h2 className="m-8 text-5xl">Gallery</h2>
      <Toggle label="Carousel view" onClick={changeLayout} />
     {isCarousel ? <Carousel images={images} /> : <Gallery images={images} />}
    </div>
  )
};

export default GalleryPage;
