import React from 'react';

export default function Button({ href, children, theme, ...props }) {
  return (
    <div className={`inline-block align-middle px-6 py-3 rounded-md ${theme.text.buttons} relative overflow-hidden text-center ${theme.bg.buttons}`} {...props}>
      <a className={``} href={href}>
        <div className={`flex items-center`}>{children && children}</div>
      </a>
    </div>
  );
}
