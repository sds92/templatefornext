import React from 'react';
import { Text } from 'components/lib';
import { Logos, Icons } from '../../';
import Social from '../../Social/Social';

type PreHeaderProps = {
  app: IApp;
  theme: ITheme;
  inView: boolean;
};

const PreHeader = ({ app, theme, inView }: PreHeaderProps) => {
  const Logo = Logos[app?.logo as string];
  return (
    <div
      className={`flex items-center justify-center zero:gap-10 lg:gap-32 bg-${theme.bg.header.color.s1} ${
        inView ? 'h-24' : 'h-0'
      } overflow-hidden transition-all shadow-inner`}
    >
      <div>
        <a href='#main' title={app?.url || ''}>
          <Logo
            style={{
              ['-webkit-filter']: `drop-shadow( 0px 3px 10px rgba(63, 63, 70, 0.5) )`,
              filter: ` drop-shadow( 0px 3px 10px rgba(63, 63, 70, 0.5) )`,
            }}
            w={20}
            h={20}
          />
        </a>
      </div>
      <div className={`flex items-center`}>
        <Icons.Location w={8} h={8} className={`text-zinc-400`} />
        <Text className={`text-zinc-400`}>{app.contacts.addresses[0].value}</Text>
      </div>
      <div className={`flex items-center gap-2`}>
        <Social contacts={app.contacts} theme={theme} noPhone big/>
        <div className={`text-zinc-400`}>
          <a
            style={{
              textShadow: `2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.1)`,
            }}
            className={`font-light text-xl hover:text-${theme.text.header.color.hover} transition-all `}
            href={`tel:${app.contacts.phones[0]}`}
          >
            {app.contacts.phones[0]}
          </a>
          <Text
            style={{
              textShadow: `2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.1)`,
            }}
          >
            {app.contacts.workingHoars}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;
