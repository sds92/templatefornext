import React from 'react';

export default function Button({ href, children, theme, ...props }) {
  console.log("🚀 ~ file: Button.js ~ line 4 ~ Button ~ theme", theme)
  return (
    <div className={`button button-primary border-0 ${theme?.bg} hover:bg-belplit24_2_b hover:border-belplit24_2_b`} {...props}>
      <a className={``} href={href}>
        <div className={`flex items-center`}>{children && children}</div>
      </a>
    </div>
  );
}
