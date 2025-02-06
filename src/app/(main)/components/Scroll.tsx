import * as React from 'react';
import { useState } from 'react';
import NewsNotice from "../../(other)/news/components/NewsNotice";
import jsonData from "@/data/news.json";
import {fetchAllNews} from "@/app/functions/fetchNews";
import { ArrowLeftSVG, ArrowRightSVG } from '@/public/svgs';

const news = await fetchAllNews({arrays: jsonData})

function getCarouselImage({index}: {index:number}) {
  const newsItem = news[index]
  return <NewsNotice data={newsItem} index={index} />
}

const Carousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const items = news

  return (
    <div className='mx-auto grid justify-center items-center'>
      <div className='h-96 overflow-y-scroll'>
        {getCarouselImage({index:currentIndex})}
      </div>
      <div className='flex justify-center'>
        {currentIndex > 0 && 
          <button className='button cursor-pointer w-10'
            onClick={() =>
              setCurrentIndex(currentIndex === 0 ? 0 : currentIndex -1 )
            }
            >
            {ArrowLeftSVG}
          </button>
        }
        {currentIndex === 0 && <div className='w-10'/>}
        <button className='button cursor-pointer w-10'
          onClick={() =>
            setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1)
          }
        >
          {ArrowRightSVG}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
