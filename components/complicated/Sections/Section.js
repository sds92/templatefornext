import React from 'react';
import Sections from './components';

export default function Section(props) {
  const SectionContent = Sections[props.id] || <></>;
  const app = props.app
  return (
    <section name={props.name} id={props.id} className={props.className}>
      {props.id && <SectionContent app={app} {...props}/>}
      {props.children && props.children}
    </section>
  );
}
