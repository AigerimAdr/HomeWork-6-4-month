import { useState } from 'react';
import './slide.css'

const slideImg = [
  {
    imageUrl: "/img/pic-1.jpg",
    alt: "pic-1",
  },
  {
    imageUrl: "/img/pic-2.jpg",
    alt: "pic-2",
  },
  {
    imageUrl: "/img/pic-3.jpg",
    alt: "pic-3",
  },
  {
    imageUrl: "/img/pic-4.jpg",
    alt: "pic-4",
  },
  {
    imageUrl: "/img/pic-5.jpg",
    alt: "pic-5",
  }
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const hasNext = index < slideImg.length - 1;
  const hasPrev = index > 0;

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } 
  }

  function handlePrevClick() {
    if (hasPrev) {
      setIndex(index - 1);
    } else {
      setIndex(0);
    }
  } 

  let slide = slideImg[index];
  return (
    <div>
      <h3>
        Nature
      </h3>
      <div className='slider'>
        <img src={slide.imageUrl} alt={slide.alt}/>
        </div>
      <div className='slide-btn'>
        <button onClick={handlePrevClick}>
          Prev
        </button>
        <button onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}