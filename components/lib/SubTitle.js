import React from 'react';
import { Text } from '.';

export default function SubTitle({ children }) {
  return (
    <div className={`py-1`}>
      <p className={`text-center text-slate-800 font-light tracking-wide`}>
        <span className={``}>
          <Text>{children && children}</Text>
        </span>
      </p>
    </div>
  );
}
