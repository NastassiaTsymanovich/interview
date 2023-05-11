import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { IImage } from "../../../interfaces/image";
import GalerySkeleton from "../Skeleton/GalerySkeleton";

const Carousel = ({ images }: {images: IImage[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const handleNextClick = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handleDotClick = (index: number) => {
      setCurrentIndex(index);
    };

    return (
      <div className="bg-gray-600 shadow-lg w-[550px] m-auto mt-4 p-4 rounded">
        <div className="bg-gray-500 shadow-lg w-[500px] flex flex-col justify-center m-auto rounded">
          <div className="m-8 flex flex-wrap gap-4 justify-center">
            <button onClick={handlePrevClick}>
              <ChevronLeftIcon className="h-8 w-8 text-gray-700 hover:text-gray-400" />
            </button>
            <div className="min-h-[315px] min-w-[315px] max-w-xs">
              {
                images[currentIndex] ?
                  <img src={images[currentIndex].url} alt={`${images[currentIndex].title}`} className='min-w-xs' />
                :
                  <GalerySkeleton />
              }
            </div>
            <button onClick={handleNextClick}>
              <ChevronRightIcon className="h-8 w-8 text-gray-700 hover:text-gray-400" />
            </button>
          </div>
          <div className="flex gap-2 justify-center pb-4">
            {images.length &&
              images.map((image, index) => (
                <button
                  key={`${image.albumId}-${image.id}`}
                  disabled={currentIndex === index}
                  className={`w-2 h-2 rounded hover:bg-gray-900 ${currentIndex === index ? "bg-green-600" : "bg-gray-600"}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
          </div>
        </div>
      </div>
    );
};

export default Carousel;
