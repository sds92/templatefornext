import React from 'react';

type SectionWrapperProps = {
  theme: ITheme;
  w: number;
  children: React.ReactNode;
  id?: string;
  sectionRef?: React.Ref<HTMLElement>;
  minH?: boolean;
};

const SectionWrapper = ({ id, children, theme, w, sectionRef, minH }: SectionWrapperProps) => {
  const style = minH ? { minHeight: `${w >= 900 ? 'calc(100vh - 5rem)' : 'calc(100vh - 4rem)'}` } : {minHeight: '500px'};
  return (
    <section
      ref={sectionRef}
      id={id}
      style={style}
      className={`w-full overflow-hidden flex flex-col relative z-20 bg-opacity-50`}
    >
      {children && children}
    </section>
  );
};

export default SectionWrapper;
