import React from 'react';

const Slider = (props) => {
  const { imgs, lgView } = props;
  const [curImg, setCurImg] = React.useState(0);
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
        imgs.map((img, i) => {
          return (
            <div
              key={`img${i}`}
              className={`absolute inline h-full w-full transition-all duration-1000 ${
                i === curImg ? 'opacity-100 z-10' : 'opacity-0 scale-110'
              }`}
            >
              <img className={`${lgView ? `h-auto min-w-full` : `w-auto min-h-full`} object-cover`} src={`/images/pilomateriali.site/${img}`}></img>
            </div>
          );
        })}
      <div></div>
    </>
  );
};
export default Slider;
