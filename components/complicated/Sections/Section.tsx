import React from 'react';
import Sections from './';

export type SectionProps = {
  app: IApp;
  id: string;
  theme: ITheme;
  w: number;
};

const Section = (props:SectionProps) => {
  const { id, app, theme, w } = props;
  const s = app.content.template.find((item) => item.id === id)?.model.replaceAll('.', '') as string;
  const SectionContent = Sections[s] || null;
  return SectionContent && <SectionContent app={app} id={id} theme={theme} w={w} />;
};

export default Section;
