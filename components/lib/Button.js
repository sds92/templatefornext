import React from 'react';

export default function Button({ href, children, theme, ...props }) {
  return (
    <div className={`button button-primary border-0 ${theme?.buttonColours}`} {...props}>
      <a className={``} href={href}>
        <div className={`flex items-center`}>{children && children}</div>
      </a>
    </div>
  );
}
