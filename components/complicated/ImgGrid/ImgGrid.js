import React from 'react';
import useInterval from '../../../utils/hooks/useInterval';

export default function ImgGrid(props) {
  const { imgs } = props;
  const [state, setState] = React.useState({
    class: 'left-0',
    left: 0,
    duration: 30,
    px: 0,
    wEl: 1000,
    delay: 30000,
  });
  const classes = {
    imgLg: `object-fill min-h-full min-w-full`,
    imgSm: `object-fill min-h-full min-w-full`,
    gridItemLg: `row-span-2 rounded-md overflow-hidden shadow-md relative`,
    gridItemSm: `rounded-md overflow-hidden shadow-md relative`,
  };
  const ref = React.useRef();
  const refPx = React.useRef(0);
  const refDelay = React.useRef(30000)

  
  // useInterval(() => {
  //   console.log("🚀 ~ file: ImgGrid.js ~ line 33 ~ ImgGrid ~ state.delay", state.delay)
  //   console.log("🚀 ~ file: ImgGrid.js ~ line 25 ~ useInterval ~ refPx.current", refPx.current)
  //   if (refPx.current !== 0) {
  //     // setState((s) => ({ ...s, px: 0 }));
  //     refPx.current = 0
  //   } else {
  //     // setState((s) => ({ ...s, px: window.innerWidth - ref.current.offsetWidth }));
  //     refPx.current = window.innerWidth - ref.current.offsetWidth
  //   }
  // }, state.delay);

  React.useEffect(() => {
    refPx.current = window.innerWidth - ref.current.offsetWidth
    console.log("🚀 ~ file: ImgGrid.js ~ line 37 ~ React.useEffect ~ ref.current.offsetWidth", ref.current, ref.current.offsetWidth)
    console.log("🚀 ~ file: ImgGrid.js ~ line 37 ~ React.useEffect ~ window.innerWidth", window.innerWidth)
    setState((s) => ({
      ...s,
      // px: window.innerWidth - ref.current.offsetWidth,
      delay: (ref.current.offsetWidth - window.innerWidth) * 20,
    }));
    const action = () => {
      refPx.current = window.innerWidth - ref.current.offsetWidth
      // setState((s) => ({
      //   ...s,
      //   // px: window.innerWidth - ref.current.offsetWidth,
      //   delay: (ref.current.offsetWidth - window.innerWidth) * 20,
      // }));
    };
    window.addEventListener('resize', action);
    return () => window.removeEventListener('resize', action);
  }, []);

  const imagesSM = imgs.map((item) => ({
    src: `/images/pilomateriali.site/${item}`,
    gridClasses: classes.gridItemSm,
    imgClasses: classes.imgSm,
  }));
  return (
    <div
      ref={ref}
      className={`absolute h-full w-max flex gap-4`}
      style={{
        marginLeft: `${refPx.current}px`,
        // left: state.left,
        transitionDuration: `${refDelay.current}ms`,
        transitionProperty: 'all',
        transitionTimingFunction: 'linear',
      }}
    >
      {imagesSM.map((item, index) => (
          <div
            key={`GRIDIMG${index}`}
            className={`inline h-full max-w-md w-96 transition-all duration-1000 overflow-hidden shadow-2xl`}
          >
            <img alt='' className={`min-h-full w-auto object-cover`} src={item.src}></img>
          </div>
      ))}
    </div>
  );
}
