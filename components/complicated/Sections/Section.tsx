import React from 'react';
import Sections from './components';

type SectionProps = {
  app: IApp;
};

const Section: React.FC<SectionProps> = (props) => {
  let id = props.id;
  props.app.url === 'shinglas-rus.ru' && props.id === 'Catalog' ? (id = 'CatalogAlt1') : (id = props.id);
  const SectionContent = Sections[id] || <></>;
  const app = props.app;
  return (
    <section name={props.name} id={props.id} className={props.className}>
      {props.id && <SectionContent app={app} {...props} />}
      {props.children && props.children}
    </section>
  );
};

export default Section