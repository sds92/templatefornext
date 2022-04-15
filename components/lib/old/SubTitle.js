import React from 'react';
import { Text } from '.';

export default function SubTitle({ children, className }) {
  return (
    <div className={`py-1 flex justify-center`}>
      <p className={`text-center text-slate-800 font-light tracking-wide ${className}`}>
        <span className={``}>
          <Text>{children && children}</Text>
        </span>
      </p>
    </div>
  );
}
