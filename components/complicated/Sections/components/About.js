import React from 'react';
import Deviders from '../Deviders';
import { Title, SubTitle } from '../../../lib';
import { useInView } from 'react-intersection-observer';

export default function About({ content }) {
  const imgs = content[4];
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const [counter, setCounter] = React.useState({});

  React.useEffect(() => {
    if (!inView) {
      imgs.map((item, index) => {
        return setCounter((state) => {
          return { ...state, [index]: 0 };
        });
      });
    }
    if (inView) {
      imgs.forEach((item, index) => {
        console.log('🚀 ~ inView', i, counter[index]);
        let i = 0;
        // while (i < item[1]) {
        // выводит 0, затем 1, затем 2

        console.log('🚀 ~ inView', i);
        // i + item[1] / 10;
        // }
        // return;
      });
    }
  }, [inView]);

  return (
    <>
      <div ref={ref} className={``}>
        <div
          className={`transition-all duration-300 delay-100 ${
            inView ? `translate-y-0 opacity-100` : `translate-y-11 opacity-0`
          }`}
        >
          <Title a={content[2][0]} b={content[2][1]}></Title>
        </div>
        <div
          className={`transition-all duration-300 delay-100 ${
            inView ? `translate-y-0 opacity-100` : `-translate-y-11 opacity-0`
          }`}
        >
          <SubTitle className={`max-w-3xl`}>{content[3]}</SubTitle>
        </div>

        <div className={`flex flex-wrap justify-center gap-10 md:gap-40 my-10`}>
          {imgs.map((item, index) => {
            return (
              <div key={`ADVIMG${index}`} className={``}>
                <article className={`flex flex-col justify-center items-center`}>
                  <div>
                    <img src={item[0]} alt='' />
                  </div>
                  <div className={`flex text-3xl justify-center`}>
                    <div className={``}>
                      {counter[index]}
                      {/* {item[1]} */}
                    </div>
                    %
                  </div>
                  <h5 className={``}>{item[2]}</h5>
                </article>
              </div>
            );
          })}
        </div>
      </div>
      <Deviders content={content} />
    </>
  );
}
