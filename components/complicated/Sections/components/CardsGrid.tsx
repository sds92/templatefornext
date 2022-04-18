import React from 'react';
import Link from 'next/link';
import useInterval from 'utils/hooks/useInterval';

const classes = {
  imgLg: `object-fill min-h-full min-w-full`,
  imgSm: `object-fill min-h-full min-w-full`,
  gridItemLg: `row-span-2 rounded-md overflow-hidden shadow-md relative`,
  gridItemSm: `rounded-md overflow-hidden shadow-md relative`,
};

const imagesSM = [
  {
    src: 'images/examples/2.jpg',
    gridClasses: classes.gridItemSm,
    imgClasses: classes.imgSm,
    desc: `Внутренняя изоляция стен`,
  },
  {
    src: 'images/examples/3.jpg',
    gridClasses: classes.gridItemLg,
    imgClasses: classes.imgLg,
    desc: `Тепло и шумоизоляция скатных кровель`,
  },
  {
    src: 'images/examples/4.jpg',
    gridClasses: classes.gridItemSm,
    imgClasses: classes.imgSm,
    desc: `Утепление зданий`,
  },
  {
    src: 'images/examples/1.jpg',
    gridClasses: classes.gridItemLg,
    imgClasses: classes.imgLg,
    desc: `Внутренняя изоляция перекрытий под стяжку бесшовных полов (ламинат, паркетная доска)`,
  },
  {
    src: '/images/examples/5.jpg',
    gridClasses: classes.gridItemSm,
    imgClasses: classes.imgSm,
    desc: `Ветрозащита, утепление внешних стен`,
  },
  {
    src: '/images/examples/6.jpg',
    gridClasses: classes.gridItemSm,
    imgClasses: classes.imgSm,
    desc: `Звукоизоляция потолка`,
  },
  {
    src: '/images/examples/7.jpg',
    gridClasses: classes.gridItemSm,
    imgClasses: classes.imgSm,
    desc: `Звукоизоляция потолка`,
  },
  {
    src: '/images/examples/8.jpg',
    gridClasses: classes.gridItemSm,
    imgClasses: classes.imgSm,
    desc: `Звукоизоляция потолка`,
  },
  {
    src: '/images/examples/9.jpg',
    gridClasses: classes.gridItemSm,
    imgClasses: classes.imgSm,
    desc: `Звукоизоляция потолка`,
  },
  {
    src: '/images/examples/10.jpg',
    gridClasses: classes.gridItemSm,
    imgClasses: classes.imgSm,
    desc: `Звукоизоляция потолка`,
  },
];

type CardsGridProps = {};

const CardsGrid = (props: any) => {
  const [px, setPx] = React.useState<number>(0);
  const directionRef = React.useRef('left');
  const componentRef = React.useRef<HTMLElement>();
  const requestRef = React.useRef<number>();
  const pxRef = React.useRef(0);

  function animate(timestamp: number) {
    if (componentRef.current !== undefined) {
      const reserv = componentRef.current.offsetWidth - window.innerWidth;

      if (directionRef.current === 'left') {
        if (pxRef.current <= reserv) {
          pxRef.current = pxRef.current + 1;
          componentRef.current.style.transform = 'translateX(' + -pxRef.current + 'px)';
        } else {
          directionRef.current = 'right';
        }
      }
      if (directionRef.current === 'right') {
        if (pxRef.current >= 0) {
          pxRef.current = pxRef.current - 1;
          componentRef.current.style.transform = 'translateX(' + -pxRef.current + 'px)';
        } else {
          directionRef.current = 'left';
        }
      }

      requestRef.current = requestAnimationFrame(animate);
    }
  }

  React.useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current as number);
  }, []);

  return (
    <div className={`relative w-screen my-4 flex flex-col items-center`}>
      <div
        ref={componentRef as React.LegacyRef<HTMLDivElement>}
        className={`absolute left-0 flex gap-4 h-screen transition-all `}
        style={{
          height: `70vh`,
        }}
      >
        {imagesSM.map((item, index) => (
          <div
            key={`GRIDIMG${index}`}
            className={`zero:w-48 md:w-64 border rounded-md overflow-hidden shadow-md relative`}
            style={{
              background: `no-repeat url(.${item.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className={`w-full h-full inset-0 absolute bg-black opacity-20`}></div>
          </div>
        ))}
      </div>

      <div className={`sm:hidden w-full mt-4 h-12 flex items-center justify-center`}></div>
    </div>
  );
};
export default CardsGrid;
