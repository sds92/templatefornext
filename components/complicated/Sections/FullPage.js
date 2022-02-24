import React from 'react';
import Sections from './components';

export default function FullPage({ ...props }) {
  return (
    <>
      <Sections.Main {...props} />
      {props.datafromDB[3][0] === 'singlas' ?  <Sections.CatalogShinglas {...props} /> : <Sections.Catalog {...props} />}
      <Sections.About {...props} />
      <Sections.OrderClick {...props}/>
      <Sections.Advantages {...props}/>
      <Sections.Gallery {...props} />
      <Sections.Contacts {...props} />
    </>
  );
}
