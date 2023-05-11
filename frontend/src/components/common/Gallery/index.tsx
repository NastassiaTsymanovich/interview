import React from "react";
import { IImage } from "../../../interfaces/image";
import GalerySkeleton from "../Skeleton/GalerySkeleton";

const Gallery = ({ images }: {images: IImage[]}) => {
  return (
    <div className="m-4 flex flex-wrap gap-4 justify-center">
      {
      images.length ? 
        images.map(image => 
          <div key={`${image.id}-${image.albumId}`} className="min-h-[200px] min-w-[315px] max-w-xs border-2 overflow-hidden shadow-lg flex flex-col">
            <img src={image.url} alt={image.title} className='min-w-xs' />
            <div className="px-6 py-4 mt-auto">
              <p>{image.title}</p>
            </div>
          </div>
        )
      :
        Array.from(Array(6)).map((_, idx) => <GalerySkeleton key={`skeleton-${idx}`} />)
      }
    </div>
  )
};

export default Gallery;
