import React from 'react';
import Deviders from '../Deviders';
import { Title, SubTitle, Text } from '../../../lib';
import { useInView } from 'react-intersection-observer';

export default function About(props) {
  const { w } = props;
  const content = props.content.content.catalog;
  const imgs = content[4];
  const state = {};
  imgs.map((item, index) => {
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
      content[4].forEach((item, index) => {
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
      <div ref={ref} id={`Advantages`}>
        <div className={`pt-10`}>
          <Text className={`text-center py-4 max-w-5xl mx-auto font-light`}>{content[7]}</Text>
        </div>
        <div className={`transition-all duration-300 delay-100  pt-20 ${textAnimation}`}>
          <Title a={content[2][0]} b={content[2][1]}></Title>
        </div>
        <div className={`transition-all duration-300 delay-100 mx-1 ${textAnimation}`}>
          <SubTitle className={`max-w-3xl`}>{content[3]}</SubTitle>
        </div>
        <div className={`w-full bg-belplit24_3`}>
          <div className={`py-20 flex flex-wrap justify-center gap-4 md:gap-10 my-10 max-w-7xl mx-auto`}>
            {imgs.map((item, index) => {
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
        </div>
        <Deviders content={content} />
      </div>
    </>
  );
}
