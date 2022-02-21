import React from 'react';
import { Text } from '../../../lib';
import { useInView } from 'react-intersection-observer';

export default function About(props) {
  const { theme, data, w } = props;
  const { about } = data.content;
  const state = {};
  about.animatedStats.map((item, index) => {
    return (state[index] = 0);
  });
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const [counter, setCounter] = React.useState(state);

  const requestRef = React.useRef();
  const previousCountRef = React.useRef();
  const count = React.useRef(true);

  const textAnimation = `${
    w >= 500 ? (inView ? `translate-y-0 opacity-100` : `translate-y-11 opacity-0`) : ``
  }`;

  const animate = (time) => {
    if (previousCountRef.current != undefined) {
      count.current++;
      about.animatedStats.forEach((item, index) => {
        setCounter((prevCount) => {
          if (prevCount[index] <= item[1]) {
            return { ...prevCount, [index]: prevCount[index] + item[1] / 100 };
          } else {
            count.current = false;
            return { ...prevCount, [index]: item[1] };
          }
        });
      });
    }
    previousCountRef.current = time;
    if (count.current) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  React.useEffect(() => {
    if (inView) {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }
    if (!inView) {
      setCounter(state);
    }
  }, [inView]);
  return (
    <>
      <div ref={ref} className={``}>
        <Text
          className={`transition-all duration-300 delay-100 text-center py-4 max-w-5xl mx-auto font-bold text-5xl text-${theme.text.bodyTitle} ${textAnimation}`}
        >
          {about.title}
        </Text>
        <Text
          className={`transition-all duration-300 delay-100 text-center py-4 max-w-5xl mx-auto font-light ${textAnimation}`}
        >
          {about.subTitle}
        </Text>

        <div className={`flex flex-wrap justify-center gap-10 md:gap-40 my-10`}>
          {about.animatedStats.map((item, index) => {
            return (
              <div key={`ADVIMG${index}`} className={``}>
                <article className={`flex flex-col justify-center items-center`}>
                  <div>
                    <img src={item[0]} alt='' />
                  </div>
                  {counter[index] !== 0 && (
                    <div className={`flex text-3xl justify-center`}>
                      <div className={``}>{Math.round(counter[index])}</div>%
                    </div>
                  )}
                  <Text className={``}>{item[2]}</Text>
                </article>
              </div>
            );
          })}
        </div>
        <Text className={`text-center py-4 max-w-5xl mx-auto font-light`}>{about.text}</Text>
      </div>
    </>
  );
}
