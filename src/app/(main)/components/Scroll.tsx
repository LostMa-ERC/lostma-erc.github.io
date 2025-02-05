import * as React from 'react';
import { useState } from 'react';
import NewsNotice from "../../(other)/news/components/NewsNotice";


interface CarouselProps {
  items: any[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          {/* render your item content here */}
          <NewsNotice data={item} index={index} />
        </div>
      ))}
      <div
        onClick={() =>
          setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1)
        }
      >
      </div>
    </div>
  );
};

export default Carousel;
