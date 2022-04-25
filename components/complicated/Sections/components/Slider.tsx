import React from 'react';
import Link from 'next/link';
import useInterval from 'utils/hooks/useInterval';
import Image from 'next/image';

const classes = {
  show: 'opacity-0',
  hide: 'opacity-100',
};

type CardsGridProps = {
  imgs: string[];
};

const CardsGrid = (props: CardsGridProps) => {
  const { imgs } = props;
  const [curImg, setCurImg] = React.useState<number>(0);
  const pxRef = React.useRef(0);


  React.useEffect(() => {
    let interval = setInterval(() => {
      pxRef.current = pxRef.current < imgs.length - 1 ? pxRef.current + 1 : 0;
      setCurImg(pxRef.current);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {imgs &&
        imgs.map((img: any, i: number) => {
          return (
            <div
              key={`img${i}`}
              className={`absolute inline h-full w-full transition-all duration-1000 ${
                i === curImg ? 'opacity-100 z-10' : 'opacity-0 scale-110'
              }`}
            >
              <img className={`min-h-full w-auto object-cover`} src={`/${img}`}></img>
            </div>
          );
        })}
      <div></div>
    </>
  );
};
export default CardsGrid;
