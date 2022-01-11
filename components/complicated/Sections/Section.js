import React from 'react';
import Sections from './components';

export default function Section(props) {
  const SectionContent = Sections[props.id] || <></>;
  return (
    <section id={props.id} className={props.className}>
      {props.id && <SectionContent />}
      {props.children && props.children}
    </section>
  );
}
